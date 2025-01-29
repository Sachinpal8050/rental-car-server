import { Router } from "express";
import { addRating, getRating } from "../controllers/rating.controller.js";

const router = Router();

router.route("/rating").get(getRating).post(addRating);

export default router;
