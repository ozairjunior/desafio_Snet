import { Router } from "express";
import { UserController } from "@controllers/UserController";
import { AuthController } from "@controllers/AuthController";
import { checkJwt } from "@middlewares/checkJwt";

const router = Router();

router.get("/", checkJwt, UserController.index);
router.post("/register", UserController.create);
router.post("/login", AuthController.login);

export default router;