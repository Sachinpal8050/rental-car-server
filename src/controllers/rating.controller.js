import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";

const getRating = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;
});

const addRating = asyncHandler(async (req, res) => {
  // TODO: add a comment to a video
});

export { getRating, addRating };
