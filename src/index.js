require("babel-register")({
	//stage: 0 // for es7 features
	presets: ["stage-0"]
});

const container = require("./container");

const server = container.resolve("server");
const client = container.resolve("GetPolicyByUserName");

client.get("Britney");
server.start();
