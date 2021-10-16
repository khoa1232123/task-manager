const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

// Router
const taskRouter = require('./routes/tasks');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connect success!');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`backend server is running... with port: ${process.env.PORT}`);
});
