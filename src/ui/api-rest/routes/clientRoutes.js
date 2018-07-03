import express from "express";

export default ({ ClientController }) => {
	const routes = express.Router();
	//router
	// .route("/signin")
	// /** POST /api/clients/signin */
	// .post(ClientController.signInUser);

	routes
		.route("/id/:userID")
		/** GET /api/clients/id/:userId - Get user */
		.get(async (req, res) => {
			return await ClientController.getUserById(req, res);
		});

	routes
		.route("/username/:userName")
		/** GET /api/clients/username/:userName - Get user */
		.get(async (req, res) => {
			return await ClientController.getUserByName(req, res);
		});

	routes
		.route("/policy/:policyID")
		/** GET /api/clients/policy/:policyID - Get user */
		.get(async (req, res) => {
			return await ClientController.getUserByPolicyNumber(req, res);
		});
	return routes;
};
