//Libraries for the creation of a container for the investment of dependencies
import { createContainer, asClass, asFunction, asValue } from "awilix";

//Values of the system configuration
import { config } from "./config/index";

//Class, Functions and Values of system
import Server from "./ui/api-rest/index";
import expressApp from "./ui/api-rest/express";

//Import Routes Funtions
import router from "./ui/api-rest/routes";
import clientRoutes from "./ui/api-rest/routes/clientRoutes";
import policyRoutes from "./ui/api-rest/routes/policyRoutes";

//Import Controllers
import { ClientController } from "./ui/api-rest/controllers/";
import { PolicyController } from "./ui/api-rest/controllers/";

//Import Application Class
import { GetUserById } from "./application/client/";
import { GetUserByName } from "./application/client/";
import { GetUserByPolicyNumber } from "./application/client/";
import { GetPolicyByUserName } from "./application/policy/";
import { Signin } from "./application/services/";

//Import Aggregates Class
import ClientAggregate from "./domain/aggregates/client/";
import PolicyAggregate from "./domain/aggregates/policy/";

//Import Repositories
import ClientRepository from "./infraestructure/persistence/repositories/domain/models/client/";
import PolicyRepository from "./infraestructure/persistence/repositories/domain/models/policy/";

//Import Models
import Client from "./domain/models/client";
import Policy from "./domain/models/policy";

//Create Awilix container for IOC
const container = createContainer();

//Add System Class, Functions and Values
container
	// ==== System Values ====
	.register({
		config: asValue(config)
	})

	// ==== System API ====
	.register({
		Server: asClass(Server).singleton()
	})
	.register({
		expressApp: asFunction(expressApp).singleton()
	})

	// ==== API Routes ====
	.register({
		clientRoutes: asFunction(clientRoutes).singleton()
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
	})
	.register({
		Signin: asClass(Signin).singleton()
	})

	// ==== System Aggregates ====
	.register({
		ClientAggregate: asClass(ClientAggregate).singleton()
	})
	.register({
		PolicyAggregate: asClass(PolicyAggregate).singleton()
	})

	// ==== System Repositories ====
	.register({
		PolicyRepository: asClass(PolicyRepository).singleton()
	})
	.register({
		ClientRepository: asClass(ClientRepository).singleton()
	})

	// ==== System Models ====
	.register({
		Client: asClass(Client).singleton()
	})
	.register({
		Policy: asClass(Policy).singleton()
	})

	// ==== System Factories ====
	.register({
		createClient: asFunction(cradle => (id, name, email, role) =>
			new Client(id, name, email, role)
		)
	})
	.register({
		createPolicy: asFunction(
			cradle => (
				id,
				amountInsured,
				email,
				inceptionDate,
				installmentPayment,
				clientId
			) =>
				new Policy(
					id,
					amountInsured,
					email,
					inceptionDate,
					installmentPayment,
					clientId
				)
		)
	});

module.exports = container;
