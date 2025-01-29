import { Router } from "express";
import { addLead, getLeads } from "../controllers/lead.controller.js";

const router = Router();

router.route("/lead").get(getLeads).post(addLead);

export default router;
