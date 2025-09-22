const express = require('express');
const Book = require('../models/books.models');

const router = express.Router();

router.post("/create/post", async (req, res) => {
    try {
        const { Title, Content, Author, Tags, Likes, createdAt } = req.body;
        const newBook = new Book({ Title, Content, Author, Tags, Likes, createdAt });
        await newBook.save();
        return res.status(201).json({ message: 'Book Logged successfully', book: newBook });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.get("/posts", async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({ books });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

