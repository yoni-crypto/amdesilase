const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');
const { authenticateToken, authorizeAdmin } = require('../middlewares/authMiddleware');


// POST route to add a new student
router.post('/create', StudentController.createStudent);

// GET route to fetch students by class
router.get('/class/:class', StudentController.getStudentsByClass);


// Apply middleware to routes
router.put('/update/:id',  StudentController.updateStudent);
router.delete('/delete/:id',  StudentController.deleteStudent);
// authenticateToken, authorizeAdmin,
// authenticateToken, authorizeAdmin,


// GET route to fetch total student count
router.get('/totalCount', StudentController.getTotalCount);

module.exports = router;

