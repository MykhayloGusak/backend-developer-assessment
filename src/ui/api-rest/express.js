import express from "express";
import jwt from "jsonwebtoken";

export default ({ config, router }) => {
	const expressApp = express();
	expressApp.disable("x-powered-by");
	//Detect user
	expressApp.use(function(req, res, next) {
		if (
			req.headers &&
			req.headers.authorization &&
			req.headers.authorization.split(" ")[0] === "JWT"
		) {
			jwt.verify(
				req.headers.authorization.split(" ")[1],
				config.SECRETSTRING,
				function(err, decode) {
					if (err) req.user = undefined;
					else {
						req.user = decode.name;
						req.role = decode.role;
					}
					next();
				}
			);
		} else {
			req.user = undefined;
			next();
		}
	});
	// mount all routes on /api path
	expressApp.use("/api", router);
	expressApp.use(function(req, res) {
		res.status(404).send({ url: req.originalUrl + " not found" });
	});
	return expressApp;
};
