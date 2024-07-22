import express from "express";
import { addBook, getAllBooks } from "../controller/books.js";
import { body } from "express-validator";


const router = express.Router()

router.route('/').get(getAllBooks)
router.route('/add').post(
    [
        body('title').notEmpty().withMessage('Title is required'),
        body('author').notEmpty().withMessage('Author is required')
    ], addBook)

export default router
