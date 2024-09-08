
import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewNavbar from './navbar';

const CustomGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const FormContainer = styled(Box)(({ theme }) => ({
    width: '50%',
    margin: '0 auto',
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const Registration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        churchName: '',
        sex: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        phoneNumber: '',
        parentName: '',
        parentPhoneNumber: '',
        subCity: '',
        wereda: '',
        class: '',
        age: ''
    });

    const ethiopianMonths = [
        'መስከረም', 'ጥቅምት', 'ህዳር', 'ታህሳስ', 'ጥር', 'የካቲት',
        'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 
        'ጳጉሜን'
    ];
    

    const years = Array.from({ length: 100 }, (_, i) => 2016 - i);
    const daysInMonth = (month) => {
        if (month === 'ጳጉሜን') return 6;
        return 30;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { birthDay, birthMonth, birthYear } = formData;
        const monthIndex = ethiopianMonths.indexOf(birthMonth) + 1;
        const birthDate = `${birthYear}-${monthIndex.toString().padStart(2, '0')}-${birthDay.toString().padStart(2, '0')}`;

        const dataToSend = { ...formData, birthDate };

        try {
            await axios.post('https://amdesilase-api.vercel.app/api/students/create', dataToSend);
            toast.success('Student registered successfully!');
            setFormData({
                fullName: '',
                churchName: '',
                sex: '',
                birthDay: '',
                birthMonth: '',
                birthYear: '',
                phoneNumber: '',
                parentName: '',
                parentPhoneNumber: '',
                subCity: '',
                wereda: '',
                class: '',
                age: ''
            });
        } catch (error) {
            console.error(error);
            toast.error('Failed to register student. Please try again.');
        }
    };

    return (
        <div>
        <NewNavbar />

        
        <FormContainer>

            <Typography variant="h4" gutterBottom>
                የተማሪ ምዝገባ
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="ሙሉስም"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="የክርስትናስም"
                            name="churchName"
                            value={formData.churchName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>ጾታ</InputLabel>
                            <Select
                                name="sex"
                                value={formData.sex}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="">ምረጥ</MenuItem>
                                <MenuItem value="Male">ወንድ</MenuItem>
                                <MenuItem value="Female">ሴት</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container spacing={2} item xs={12}>
                        <CustomGrid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel>የትውልድቀን</InputLabel>
                                <Select
                                    name="birthDay"
                                    value={formData.birthDay}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="">ቀን</MenuItem>
                                    {[...Array(daysInMonth(formData.birthMonth)).keys()].map(num => (
                                        <MenuItem key={num + 1} value={num + 1}>{num + 1}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </CustomGrid>
                        <CustomGrid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel>ወር</InputLabel>
                                <Select
                                    name="birthMonth"
                                    value={formData.birthMonth}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="">ወር ምረጥ</MenuItem>
                                    {ethiopianMonths.map((month, idx) => (
                                        <MenuItem key={idx} value={month}>{month}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </CustomGrid>
                        <CustomGrid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel>አመተምህረት</InputLabel>
                                <Select
                                    name="birthYear"
                                    value={formData.birthYear}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="">አመተምህረት ምረጥ</MenuItem>
                                    {years.map((year, idx) => (
                                        <MenuItem key={idx} value={year}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </CustomGrid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="number"
                            label="ዕድሜ"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="ስልክ ቁጥር"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="የወላጅስም"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="የወላጅ ስልክ ቁጥር"
                            name="parentPhoneNumber"
                            value={formData.parentPhoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>ክፍለከተማ</InputLabel>
                            <Select
                                name="subCity"
                                value={formData.subCity}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="Addis Ketema">አዲስ ከተማ</MenuItem>
                                <MenuItem value="Akaki Kality">አቃቂ ቃሊቲ</MenuItem>
                                <MenuItem value="Arada">አራዳ</MenuItem>
                                <MenuItem value="Bole">ቦሌ</MenuItem>
                                <MenuItem value="Gulele">ጉለሌ</MenuItem>
                                <MenuItem value="Kirkos">ቂርቆስ</MenuItem>
                                <MenuItem value="Kolfe Keranio">ኮልፌ ቀራኒዮ</MenuItem>
                                <MenuItem value="Lideta">ልደታ</MenuItem>
                                <MenuItem value="Nifas Silk-Lafto">ንፋስ ስልክ-ላፍቶ</MenuItem>
                                <MenuItem value="Yeka">የካ</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="ወረዳ"
                            name="wereda"
                            value={formData.wereda}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>ክፍል</InputLabel>
                            <Select
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="">Select</MenuItem>
                                {[...Array(10).keys()].map(num => (
                                    <MenuItem key={num + 1} value={num + 1}>{num + 1}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            መዝግብ
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <ToastContainer />
        </FormContainer>
        </div>

    );
};

export default Registration;
