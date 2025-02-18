import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  adress: { type: String, required: true },
  ditance: { type: String, required: true },
  photo: [{}],
  title: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  rooms: { type: [String] },
  desc: { type: String },
  cheapestPrice: { type: Number, required: true },
  featured: { type: Boolean, default: false }
});

export default mongoose.model("Hotel", HotelSchema);
