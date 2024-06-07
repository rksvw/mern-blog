const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
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

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
