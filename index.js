import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/auth.js";
import hotelRoutes from "./routes/hotels.js";
import roomRoutes from "./routes/rooms.js";
import bookingRoutes from "./routes/booking.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "./utils/error.js";
import jwt from "jsonwebtoken";





export const register = async (req, res, next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


    const newUser = new User({
        username:req.body.username,
        email: req.body.email,
        password:hash,
    })

    await newUser.save();
    res.status(200).send("User has been created.")
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next)=>{
    try{
        const user =await User.findOne({username: req.body.username});

        if(!user)
             return next(createError(404,"User not found"));
    
        const isPasswordCorrect = await bcrypt.compare (
            req.body.password, user.password 
        );
        if (!isPasswordCorrect)
             return next(createError(400,"Wrong password or Username!"));

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET
        );
        
       

       
           const {password, isAdmin, ...otherDetails} = user._doc;
            res.cookie("access_token",token,{
                httpOnly: true,
            })
            .status(200).json({...otherDetails});  
    } catch (error) {
        next(error);
    }
};

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
