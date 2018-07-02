import express from "express";

export default ({ config, router }) => {
	const expressApp = express();
	// mount all routes on /api path
	expressApp.use("/api", router);
	expressApp.use(function(req, res) {
		res.status(404).send({ url: req.originalUrl + " not found" });
	});
	return expressApp;
};
