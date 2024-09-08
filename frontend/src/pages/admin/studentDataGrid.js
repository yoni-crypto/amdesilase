import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toast } from 'react-toastify';

export default function StudentDataGrid({ className }) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentStudent, setCurrentStudent] = useState(null);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'fullName', headerName: 'ሙሉስም', width: 150 },
        { field: 'churchName', headerName: 'የክርስትናስም', width: 120 },
        { field: 'sex', headerName: 'ጾታ', width: 100 },
        {
            field: 'birthDate', headerName: 'የትውልድቀን', width: 150, renderCell: (params) => (
                <div>
                    {formatDate(params.value)}
                </div>
            ),
        },
        { field: 'age', headerName: 'ዕድሜ', type: 'number', width: 80 },
        { field: 'phoneNumber', headerName: 'ስልክቁጥር', width: 150 },
        { field: 'parentName', headerName: 'የወላጅስም', width: 120 },
        { field: 'parentPhoneNumber', headerName: 'የወላጅስልክቁጥር', width: 120 },
        { field: 'subCity', headerName: 'ክፍለከተማ', width: 80 },
        { field: 'wereda', headerName: 'ወረዳ', width: 70 },
        { field: 'class', headerName: 'ክፍል', width: 50 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 140,
            renderCell: (params) => (
                <div>
                    <Button
                        color="primary"
                        onClick={() => handleEdit(params.row)}
                    >
                        Edit
                    </Button>
                    <Button
                        color="secondary"
                        onClick={() => openConfirmDeleteDialog(params.row)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(`https://amdesilase-api.vercel.app/api/admin/students/class/${className}`);
                setStudents(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching students:', error);
                toast.error('Error fetching students');
                setLoading(false);
            }
        };

        fetchStudents();
    }, [className]);

    const handleEdit = (student) => {
        setCurrentStudent(student);
        setDialogOpen(true);
    };

    const openConfirmDeleteDialog = (student) => {
        setStudentToDelete(student);
        setConfirmDeleteOpen(true);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://amdesilase-api.vercel.app/api/students/delete/${studentToDelete._id}`);
            setStudents(students.filter(student => student._id !== studentToDelete._id));
            setConfirmDeleteOpen(false);
            toast.success('Student deleted successfully');
        } catch (error) {
            console.error('Error deleting student:', error);
            toast.error('Error deleting student');
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`https://amdesilase-api.vercel.app/api/students/update/${currentStudent._id}`, currentStudent);
            setStudents(students.map(student => (student._id === currentStudent._id ? response.data : student)));
            setDialogOpen(false);
            setCurrentStudent(null);
            toast.success("Student detail updated successfully!");
        } catch (error) {
            console.error('Error updating student:', error);
            toast.error('Error updating student');
        }
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setCurrentStudent(null);
    };

    const handleChange = (e) => {
        setCurrentStudent({ ...currentStudent, [e.target.name]: e.target.value });
    };

    const handlePrint = () => {
        const printContents = document.getElementById('printable-area').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload();  // Reload to restore the state after print
    };

    return (
        <>
            <Paper sx={{ height: 800, width: '95%', marginBottom: '20px' }}>
                <DataGrid
                    rows={students.map(student => ({ ...student, id: student._id }))}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                    loading={loading}
                    getRowId={(row) => row._id}
                />
            </Paper>

            <Button variant="contained" color="primary" onClick={handlePrint}>
                Print Student Details
            </Button>

            <div id="printable-area" style={{ display: 'none' }}>
                <h2>Student Details</h2>
                <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            {columns.filter(col => col.field !== 'actions').map((col, idx) => (
                                <th key={idx}>{col.headerName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, idx) => (
                            <tr key={idx}>
                                <td>{student.id}</td>
                                <td>{student.fullName}</td>
                                <td>{student.churchName}</td>
                                <td>{student.sex}</td>
                                <td>{formatDate(student.birthDate)}</td>
                                <td>{student.age}</td>
                                <td>{student.phoneNumber}</td>
                                <td>{student.parentName}</td>
                                <td>{student.parentPhoneNumber}</td>
                                <td>{student.subCity}</td>
                                <td>{student.wereda}</td>
                                <td>{student.class}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {currentStudent && (
                <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                    <DialogTitle>Edit Student</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            label="ሙሉስም"
                            name="fullName"
                            value={currentStudent.fullName || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="የክርስትናስም"
                            name="churchName"
                            value={currentStudent.churchName || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="ጾታ"
                            name="sex"
                            value={currentStudent.sex || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="የትውልድቀን"
                            name="birthDate"
                            value={currentStudent.birthDate || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="ዕድሜ"
                            name="age"
                            value={currentStudent.age || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="ስልክቁጥር"
                            name="phoneNumber"
                            value={currentStudent.phoneNumber || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="የወላጅስም"
                            name="parentName"
                            value={currentStudent.parentName || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="የወላጅስልክቁጥር"
                            name="parentPhoneNumber"
                            value={currentStudent.parentPhoneNumber || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="ክፍለከተማ"
                            name="subCity"
                            value={currentStudent.subCity || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="ወረዳ"
                            name="wereda"
                            value={currentStudent.wereda || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="ክፍል"
                            name="class"
                            value={currentStudent.class || ''}
                            onChange={handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleUpdate}>Update</Button>
                    </DialogActions>
                </Dialog>
            )}

            <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete the student "{studentToDelete?.fullName}"?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDeleteOpen(false)}>Cancel</Button>
                    <Button onClick={handleDelete} color="secondary">Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
