import { validationResult } from "express-validator";
import { Book } from "../models/books.js";


export const getAllBooks = async (req, res) => {
    res.status(200).json({ msg: 'ok' })

}

export const addBook = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc, author } = req.body;
    try {
        const savedBook = await Book.create({ title, desc, author });
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}