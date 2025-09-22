const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
{
    Title: { 
        type: String,
        required: true,
        minimum: 5,
    },
    Content: { 
        type: String,
        required: true,
        minimum: 20,
    },
    Author: { 
        type: String,
        required: true,
    },
    Tags: {
        type: [String],
        default: [],
    },
    Likes:{
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

},
{ timestamps: true }
);

const Book = mongoose.model("Books", bookSchema);
module.exports = Book;