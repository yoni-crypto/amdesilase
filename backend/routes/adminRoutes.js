const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Fetch students by class
router.get('/students/class/:class', async (req, res) => {
    try {
        const { class: studentClass } = req.params;
        const students = await Student.find({ class: studentClass });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch total student count
router.get('/students/totalCount', async (req, res) => {
    try {
        const totalCount = await Student.countDocuments();
        res.status(200).json({ totalCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
