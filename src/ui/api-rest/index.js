export default class Server {
  constructor({ config, expressApp }) {
    this.config = config;
    this.expressApp = expressApp;
  }

  start() {
    return new Promise(resolve => {
      const server = this.expressApp.listen(this.config.PORT, () => {
        console.log(
          "API Server started and listening on port " + this.config.PORT
        );
        resolve();
      });
    });
  }
}
