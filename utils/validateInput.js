module.exports = (req, res, next) => {
    const { name, subjet, teachersName } = req.body;
    if (!name || !subjet || !teachersName) {
        return res.status(400).json({ msg: "Please fill in all fields" });
    }
    next();
}
