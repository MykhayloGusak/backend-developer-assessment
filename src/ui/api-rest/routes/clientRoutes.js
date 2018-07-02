import express from "express";

export default class ClientRoutes {
	constructor({ ClientController }) {
		this.ClientController = ClientController;
	}

	get() {
		console.log(this.ClientController);
		const routes = express.Router();
		//router
		// .route("/signin")
		// /** POST /api/clients/signin */
		// .post(ClientController.signInUser);

		routes
			.route("/id/:userID")
			/** GET /api/clients/id/:userId - Get user */
			.get(this.ClientController.getUserById);

		routes
			.route("/username/:userName")
			/** GET /api/clients/user/:userName - Get user */
			.get(this.ClientController.getUserByName);

		routes
			.route("/policy/:policyID")
			/** GET /api/clients/id/:userId - Get user */
			.get(this.ClientController.getUserByPolicyNumber);
		return routes;
	}
}
