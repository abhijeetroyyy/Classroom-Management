const Enrollment = require("../models/enrollment.model");
const Student = require("../models/student.model");
const Class = require("../models/class.model");

exports.enrollStudent = async (req, res) => {
    try {
        const { classId, studentId } = req.body;
        if (!classId || !studentId) {
            throw new Error("Class ID and Student ID are required");
        }
        const existingEnrollment = await Enrollment.findOne({ classId, studentId });
        if (existingEnrollment) {
            throw new Error("Student is already enrolled in this class");
        }
        const newEnrollment = new Enrollment({ classId, studentId });
        await newEnrollment.save();
        res.status(201).json({ message: "Student enrolled successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.getStudentsInClass = async (req, res) => {
    try {
        const { classId } = req.params;
        if (!classId) {
            throw new Error("Class ID is required");
        }
        const students = await Enrollment.find({ classId }).populate("studentId");
        res.status(200).json(students);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}