import mongoose from "mongoose";
import { Lead } from "../models/lead.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getLeads = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;
});

const addLead = asyncHandler(async (req, res) => {
  const {
    name,
    phoneNumber,
    email,
    dateTime,
    pickupLocation,
    dropLocation,
    carType,
  } = req.body;

  if (
    !name ||
    !phoneNumber ||
    !email ||
    !dateTime ||
    !pickupLocation ||
    !dropLocation ||
    !carType
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const lead = await Lead.create({
      name,
      phoneNumber,
      email,
      dateTime,
      pickupLocation,
      dropLocation,
      carType,
    });

    res.status(201).json({ message: "Lead added successfully", lead });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add lead", error: error.message });
  }
});

export { getLeads, addLead };
