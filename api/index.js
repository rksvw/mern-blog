const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoutes = require('./routes/user.route')

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
