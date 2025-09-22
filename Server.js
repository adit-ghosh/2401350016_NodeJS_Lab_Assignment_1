const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRouter = require('./routes/books.route'); // Correct import

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const app = express();

app.use(express.json());
app.use('/', bookRouter);

app.get("/", (req, res) => {
    return res.send("<h1>Lab Assignment 1 : 2401350016</h1>");
});

app.listen(process.env.PORT, () => { 
    console.log(`Server is running on port ${process.env.PORT}`);
});