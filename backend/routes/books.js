import express from "express";
import { addBook, getAllBooks } from "../controller/books.js";

const router = express.Router()

router.route('/').get(getAllBooks)
router.route('/add').post(addBook)

export default router
