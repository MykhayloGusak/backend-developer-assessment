const path = require("path");
const ENV = process.env.NODE_ENV || "development";
const envConfig = require(path.join(__dirname, "environments", ENV));

//Database configuration
const clients = envConfig.database.clients;
const policies = envConfig.database.policies;

// Secrect String to encrypt JSON WEB TOKENS
const secretString = envConfig.auth.secretString;

//Port to expose the API REST
const port = envConfig.server.port;

const config = {
	[ENV]: true,
	ENV: ENV,
	PORT: port,
	SECRETSTRING: secretString,
	CLIENTS: clients,
	POLICIES: policies
};

export { config };
