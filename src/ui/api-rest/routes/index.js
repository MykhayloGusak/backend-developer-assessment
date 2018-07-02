import express from "express";
import { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import methodOverride from "method-override";

export default ({ config }) => {
	const router = Router();

	router
		.use(methodOverride("X-HTTP-Method-Override"))
		.use(cors())
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({ extended: true }));

	/** GET /api-status - Check service status **/
	router.get("/api-status", (req, res) =>
		res.json({
			status: "ok"
		})
	);

	// Mount routes
	// router.use('/clients', clientRoutes)
	// router.use('/policies', policiesRoutes)
	return router;
};
