import express from "express";

export default ({ config }) => {
  const expressApp = express();
  expressApp.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + " not found" });
  });
  return expressApp;
};
