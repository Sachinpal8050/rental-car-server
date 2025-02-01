import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Rating } from "../models/rating.model.js";
import { appendToSheet } from "../utils/googleSheets.js";

const getRating = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;
});

const addRating = asyncHandler(async (req, res) => {
  const { rating, review } = req.body;
  if (!rating) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const lead = await Rating.create({
      rating,
      review,
    });

    res.status(201).json({ message: "Rating added successfully", lead });
    const spreadsheetId = "1RXhesS9g4EziZTSZlPj_WEGeMt0Z-ZX-yX_E6QRFQnk";
    appendToSheet(spreadsheetId, "Sheet2", [[rating, review]]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add lead", error: error.message });
  }
});

export { getRating, addRating };
