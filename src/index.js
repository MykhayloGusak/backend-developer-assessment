require("babel-register")({
	//stage: 0 // for es7 features
	presets: ["stage-0"]
});

const container = require("./container");

const server = container.resolve("server");
const clients = container.resolve("clientRepository");

clients.getAll();
server.start();
