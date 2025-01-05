const Class = require("../models/class.model")

exports.createClass = async (req, res) => {
    try {
        const { error } = validateClass(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass)
    }
    catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
};

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find().select("-__v");
        res.status(200).json(classes)
    }
    catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
};

const validateClass = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
    });
    return schema.validate(data);
};