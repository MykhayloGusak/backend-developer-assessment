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
import ClientAggregate from "./domain/aggregates/client/";
import PolicyAggregate from "./domain/aggregates/policy/";
import { GetUserById } from "./application/client/";
import { GetUserByName } from "./application/client/";
import { GetUserByPolicyNumber } from "./application/client/";
import { GetPolicyByUserName } from "./application/policy/";
import ClientRoutes from "./ui/api-rest/routes/ClientRoutes";
import policyRoutes from "./ui/api-rest/routes/policyRoutes";
import router from "./ui/api-rest/routes";
import { ClientController } from "./ui/api-rest/controllers/";
import { PolicyController } from "./ui/api-rest/controllers/";
//Class, Functions and Values of Middleware

const container = createContainer();

// System Class
container
	// ==== System Values ====
	.register({
		config: asValue(config)
	})

	// ==== System API ====
	.register({
		server: asClass(Server).singleton()
	})
	.register({
		expressApp: asFunction(expressApp).singleton()
	})

	// ==== API Routes ====
	.register({
		ClientRoutes: asClass(ClientRoutes).singleton()
	})
	.register({
		policyRoutes: asFunction(policyRoutes).singleton()
	})
	.register({
		router: asFunction(router).singleton()
	})
	// ==== API Controllers ====
	.register({
		ClientController: asClass(ClientController).singleton()
	})
	.register({
		PolicyController: asClass(PolicyController).singleton()
	})
	// ==== System Repositories ====
	.register({
		PolicyRepository: asClass(PolicyRepository).singleton()
	})
	.register({
		ClientRepository: asClass(ClientRepository).singleton()
	})
	// ==== System Aggregates ====
	.register({
		ClientAggregate: asClass(ClientAggregate).singleton()
	})
	.register({
		PolicyAggregate: asClass(PolicyAggregate).singleton()
	})
	// ==== System Applications ====
	.register({
		GetUserById: asClass(GetUserById).singleton()
	})
	.register({
		GetUserByName: asClass(GetUserByName).singleton()
	})
	.register({
		GetUserByPolicyNumber: asClass(GetUserByPolicyNumber).singleton()
	})
	.register({
		GetPolicyByUserName: asClass(GetPolicyByUserName).singleton()
	});

module.exports = container;
