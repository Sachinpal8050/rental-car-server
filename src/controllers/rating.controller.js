import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Rating } from "../models/rating.model.js";

const getRating = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;
});

const addRating = asyncHandler(async (req, res) => {
  const { rating, review } = req.body;
  if (!rating || !review) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const lead = await Rating.create({
      rating,
      review,
    });

    res.status(201).json({ message: "Rating added successfully", lead });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add lead", error: error.message });
  }
});

export { getRating, addRating };
