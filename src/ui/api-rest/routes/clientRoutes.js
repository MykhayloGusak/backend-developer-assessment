import express from "express";

export default ({ ClientController }) => {
	const routes = express.Router();
	routes
		.route("/signin")
		/** POST /api/clients/signin */
		.post(async (req, res) => {
			return await ClientController.signin(req, res);
		});

	routes
		.route("/id/:userID")
		/** GET /api/clients/id/:userId - Get user */
		.get(ClientController.loginRequired, async (req, res) => {
			return await ClientController.getUserById(req, res);
		});

	routes
		.route("/username/:userName")
		/** GET /api/clients/username/:userName - Get user */
		.get(ClientController.loginRequired, async (req, res) => {
			return await ClientController.getUserByName(req, res);
		});

	routes
		.route("/policy/:policyID")
		/** GET /api/clients/policy/:policyID - Get user */
		.get(
			ClientController.loginRequired,
			ClientController.roleAdminCheck,
			async (req, res) => {
				return await ClientController.getUserByPolicyNumber(req, res);
			}
		);
	return routes;
};
