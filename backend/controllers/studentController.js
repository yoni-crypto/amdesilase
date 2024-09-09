const Student = require('../models/student');

// const createStudent = async (req, res) => {
//     try {
//         const newStudent = new Student(req.body);
//         await newStudent.save();
//         res.status(201).json(newStudent);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
const createStudent = async (req, res) => {
    try {
        const { fullName, churchName } = req.body;

        // Check if a student with the same fullName and churchName already exists
        const existingStudent = await Student.findOne({ fullName, churchName });

        if (existingStudent) {
            return res.status(409).json({ message: 'Student is already registered' });
        }

        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getStudentsByClass = async (req, res) => {
    try {
        const { class: studentClass } = req.params;
        const students = await Student.find({ class: studentClass });
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (deletedStudent) {
            res.status(200).json({ message: "Student deleted successfully" });
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTotalCount = async (req, res) => {
    try {
        const count = await Student.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createStudent,
    getStudentsByClass,
    updateStudent,
    deleteStudent,
    getTotalCount,
};
