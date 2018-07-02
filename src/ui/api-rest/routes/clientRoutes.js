import { ClientController } from "../controller";
import express from "express";

const router = express.Router();

router
  .route("/signin")
  /** POST /api/clients/signin */
  .post(ClientController.signInUser);

router
  .route("/id/:userID")
  /** GET /api/clients/id/:userId - Get user */
  .get(ClientController.getUserByID);

router
  .route("/username/:userName")
  /** GET /api/clients/user/:userName - Get user */
  .get(ClientController.getUserByUserName);

router
  .route("/policy/:policyID")
  /** GET /api/clients/id/:userId - Get user */
  .get(ClientController.getUserByPolicyID);

export default router;
