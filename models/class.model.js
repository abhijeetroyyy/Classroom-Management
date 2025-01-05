const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Class name is required"],
    trim: true,
    minlength: [3, "Class name must be at least 3 characters"],
    maxlength: [50, "Class name must be at most 50 characters"],
    validate: {
      validator: (v) => /^[a-zA-Z0-9\s]+$/.test(v),
      message: "Class name must only contain letters, numbers, and spaces",
    },
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
    trim: true,
    minlength: [3, "Subject must be at least 3 characters"],
    maxlength: [50, "Subject must be at most 50 characters"],
    validate: {
      validator: (v) => /^[a-zA-Z0-9\s]+$/.test(v),
      message: "Subject must only contain letters, numbers, and spaces",
    },
  },
  teacherName: {
    type: String,
    required: [true, "Teacher name is required"],
    trim: true,
    minlength: [3, "Teacher name must be at least 3 characters"],
    maxlength: [50, "Teacher name must be at most 50 characters"],
    validate: {
      validator: (v) => /^[a-zA-Z\s]+$/.test(v),
      message: "Teacher name must only contain letters and spaces",
    },
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
    validate: {
      validator: (v) => v >= new Date(),
      message: "Start date must be in the future",
    },
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
    validate: {
      validator: (v) => v >= new Date(),
      message: "End date must be in the future",
    },
  },
}, {
  timestamps: true,
  collection: "classes",
});

classSchema.index({ startDate: 1, endDate: 1 }, { unique: true });

classSchema.pre("save", function(next) {
  if (this.startDate >= this.endDate) {
    this.invalidate("endDate", "End date must be after start date");
  }
  next();
});

classSchema.pre("save", function(next) {
  this.startDate = new Date(this.startDate);
  this.endDate = new Date(this.endDate);
  next();
});

module.exports = mongoose.model("Class", classSchema);