import express from "express";
import { addBook, getAllBooks } from "../controller/books.js";
import { body } from "express-validator";
import { protect } from "../middleware/protect.js";


const router = express.Router()

router.route('/').get(protect,getAllBooks)
router.route('/add').post(protect,
    [
        body('title').notEmpty().withMessage('Title is required'),
        body('author').notEmpty().withMessage('Author is required')
    ], addBook)

export default router
