import express from "express";

export default ({ PolicyController }) => {
	const policyRoutes = express.Router();

	policyRoutes
		.route("/client/:userName")
		/** GET /api/policies/client/:userName - Get policies */
		.get(async (req, res) => {
			return await PolicyController.getPolicyByUserName(req, res);
		});

	return policyRoutes;
};
