import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { countByCity, createHotel } from "../controllers/hotel.js";
import { updateHotel } from "../controllers/hotel.js";
import { deleteHotel } from "../controllers/hotel.js";
import { getHotel } from "../controllers/hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//crete
router.post("/",verifyAdmin, createHotel);

//update
router.put("/:id",verifyAdmin, updateHotel)


//delete
router.delete("/:id",verifyAdmin, deleteHotel);

//get
router.get("/:id", getHotel);


//get all
router.get("/", getHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotel);


export default router; 