const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const cookieParser = require('cookie-parser');

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

//  Middleware to allow json data
app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// MIDDLEWARE
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
});