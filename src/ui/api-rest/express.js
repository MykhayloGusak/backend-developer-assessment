// All express related settings
import express from "express";
import winston from "winston";
import expressWinston from "express-winston";
import jwt from "jsonwebtoken";

export default ({ config, router }) => {
	const expressApp = express();
	expressApp.disable("x-powered-by");

	// Detect user
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

	if (config.ENV !== "testing") {
		// Enable Console logger
		expressApp.use(
			expressWinston.logger({
				transports: [
					new winston.transports.Console({
						json: true,
						colorize: true
					})
				],
				meta: true, // optional: control whether you want to log the meta data about the request (default to true)
				msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
				expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
				colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
				ignoreRoute: function(req, res) {
					return false;
				} // optional: allows to skip some log messages based on request and/or response
			})
		);
	}

	// Mount all routes on /api path
	expressApp.use("/api", router);
	expressApp.use(function(req, res) {
		res.status(404).send({ url: req.originalUrl + " not found" });
	});
	return expressApp;
};
