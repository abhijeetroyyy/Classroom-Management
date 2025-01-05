const Class = require("../models/class.model")
exports.createClass = async (req, res) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass)
    }
    catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
};


exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find()
        res.status(200).json(classes)
    }
    catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}