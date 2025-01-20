import express from "express"
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment } from "../controllers/userController.js"
import authUser from "../middleware/authUser.js"
import upload from "../middleware/multer.js"
//import { paymentRazorpay } from "../models/userController"

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.get("/get-profile",authUser, getProfile)
userRouter.post("/update-profile",upload.single("image"),authUser, updateProfile)
userRouter.post('/booked-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
//userRouter.post('/payment-razorpay', authUser,paymentRazorpay);
//userRouter.post('/verifyRazorpay', authUser,verifyRazorpay);
//userRouter.get('/payment/verify/:reference', verifyPayment);






//const express = require('express');
//const { initializePayment, verifyPayment } = require('./useController');
//const router = express.Router();

export default userRouter