require("babel-register")({
	//stage: 0 // for es7 features
	presets: ["stage-0"]
});

const container = require("./container");

const server = container.resolve("server");
const client = container.resolve("ClientAggregate");

client.getById("e8fd159b-57c4-4d36-9bd7-a59ca13057bb");
server.start();
