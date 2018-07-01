const path = require("path");
const logPath = path.join(__dirname, "../../logs/development.log");

module.exports = {
  server: {
    port: process.env.PORT || 5000
  },
  database: {
    clients: "http://www.mocky.io/v2/5808862710000087232b75ac",
    policies: "http://www.mocky.io/v2/580891a4100000e8242b75c5"
  },
  auth: {
    secretString: process.env.SECRETSTRING || "nodeauthsecret"
  }
};
