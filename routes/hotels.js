import express from "express";
import { createHotel, getHotels } from "../controllers/hotel.js";
import { verifyToken, verifyAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Only an admin can create a hotel
router.post("/", verifyToken, verifyAdmin, createHotel);
router.get("/", getHotels);

export default router;
