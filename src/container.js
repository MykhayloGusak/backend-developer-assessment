//Libraries for the creation of a container for the investment of dependencies
import { createContainer, asClass, asFunction, asValue } from "awilix";
import { scopePerRequest } from "awilix-express";

//Values of the system configuration
import { config } from "./config/index";

//Class, Functions and Values of system
import Server from "./ui/api-rest/index";
import expressApp from "./ui/api-rest/express";
import PolicyRepository from "./infraestructure/persistence/repositories/domain/models/policy/";
import ClientRepository from "./infraestructure/persistence/repositories/domain/models/client/";
//Class, Functions and Values of Middleware

const container = createContainer();

// System Class
container
	.register({
		server: asClass(Server).singleton()
	})
	.register({
		policyRepository: asClass(PolicyRepository).singleton()
	})
	.register({
		clientRepository: asClass(ClientRepository).singleton()
	})
	// System Functions
	.register({
		expressApp: asFunction(expressApp).singleton()
	})
	// System Values
	.register({
		config: asValue(config)
	});

module.exports = container;
