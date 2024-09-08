const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors({
  origin: ['https://amdesilase.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:true
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
// const MONGO_URI = 'mongodb+srv://yonidisu111:yoniyoye1.@amdeselase.bdsua.mongodb.net/?retryWrites=true&w=majority&appName=amdeselase';
const MONGO_URI = 'mongodb+srv://amdesilase6:amdesilase0721@amdesilase.q6vuq.mongodb.net/?retryWrites=true&w=majority&appName=amdesilase';

mongoose.connect(MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
