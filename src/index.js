require("babel-register")({
	//stage: 0 // for es7 features
	presets: ["stage-0"]
});

const container = require("./container");

const server = container.resolve("server");
const client = container.resolve("PolicyAggregate");

client.getByClientId("a0ece5db-cd14-4f21-812f-966633e7be86");
server.start();
