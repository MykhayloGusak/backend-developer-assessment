import express from "express";

export default ({ PolicyController, ClientController }) => {
	const policyRoutes = express.Router();

	policyRoutes
		.route("/client/:userName")
		/** GET /api/policies/client/:userName - Get policies */
		.get(
			ClientController.loginRequired,
			ClientController.roleAdminCheck,
			async (req, res) => {
				return await PolicyController.getPolicyByUserName(req, res);
			}
		);

	return policyRoutes;
};
