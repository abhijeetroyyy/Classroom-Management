const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: [true, "Class ID is required"],
    index: true,
    unique: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: [true, "Student ID is required"],
    index: true,
    unique: true
  }
}, {
  timestamps: true,
  versionKey: false
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;