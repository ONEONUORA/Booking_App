import express from "express";
import { createRoom, getRooms } from "../controllers/room.js";
import { verifyToken, verifyAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Only an admin can create a room
router.post("/", verifyToken, verifyAdmin, createRoom);
router.get("/", getRooms);

export default router;
