const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://amdesilase.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://amdesilase.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // Respond to preflight request
  } else {
    next(); // Pass to the next middleware
  }
});


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
