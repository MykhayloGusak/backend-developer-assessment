// The Awilix container is imported, the Server class is located and the server is run.
const container = require("./container");
const server = container.resolve("Server");

server.start();
