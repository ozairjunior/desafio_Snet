import { Router } from "express";
import { HealthController } from "@controllers/HealthController";
import customer from './customer';
import auth from "./auth";

const routes = Router();

routes.get("/", HealthController.healthCheck);

routes.use("/user", auth);
routes.use("/customer", customer);

export default routes;
