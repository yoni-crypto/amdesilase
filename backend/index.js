const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// CORS middleware
app.use(cors({
  origin: 'https://amdesilase.vercel.app', // Allow your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true, // Allow credentials (e.g., cookies)
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

// Handle preflight OPTIONS requests globally
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://amdesilase.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // Send 200 OK for OPTIONS requests (preflight)
  }
  next(); // Pass other requests to the next middleware
});

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://amdesilase6:amdesilase0721@amdesilase.q6vuq.mongodb.net/?retryWrites=true&w=majority&appName=amdesilase';

// MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
