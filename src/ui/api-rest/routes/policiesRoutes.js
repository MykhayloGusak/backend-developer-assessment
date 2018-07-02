import { PoliciesController } from "../controller";
import express from "express";

const router = express.Router();

router
	.route("/policies/:userName")
	/** GET /api/clients/id/:userId - Get user */
	.get(PoliciesController.getPoliciesByUserName);

export default router;
