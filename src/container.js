//Libraries for the creation of a container for the investment of dependencies
import { createContainer, Lifetime } from "awilix";
import { scopePerRequest } from "awilix-express";

//Values of the system configuration
import { config } from "./config/index";

//Class, Functions and Values of system
import Server from "./ui/api-rest/index";
import expressApp from "./ui/api-rest/express";

//Class, Functions and Values of Middleware

const container = createContainer();

// System
container
	.registerClass({
		server: [Server, { lifetime: Lifetime.SINGLETON }]
	})
	.registerFunction({
		expressApp: [expressApp, { lifetime: Lifetime.SINGLETON }]
	})
	.registerValue({
		config
	});

module.exports = container;
