import express from "express";
import { authUser, registerUser } from "../controller/user.js";

const router=express.Router()

router.route('/').post(registerUser)//.get(protect, allUsers)
router.post('/login',authUser)

export default router