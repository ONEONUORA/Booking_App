import express from "express";
import { bookRoom } from "../controllers/booking.js";
import { verifyToken, verifyUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Only users (non-admin) can book a room
router.post("/", verifyToken, verifyUser, bookRoom);

export default router;
