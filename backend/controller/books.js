import { validationResult } from "express-validator";
import { Book } from "../models/books.js";


export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from the database
         
        res.status(200).json({ data: books, status: 200 });
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
}

export const addBook = async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc, author } = req.body;
    try {
        const savedBook = await Book.create({ title, desc, author });
        res.status(201).json({ data: savedBook, status: 201 });
    } catch (error) {
        res.status(500).json({ error: error.message, status: 500 });
    }
}