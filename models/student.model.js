const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
    trim: true,
    minlength: [3, "Firstname must be at least 3 characters"],
    maxlength: [50, "Firstname must be at most 50 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
    trim: true,
    minlength: [3, "Lastname must be at least 3 characters"],
    maxlength: [50, "Lastname must be at most 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: (v) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
}, { timestamps: true, collection: 'students' });

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;