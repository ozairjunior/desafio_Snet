import { Router } from "express";
import { CustomerController } from '@controllers/CustomerController';
import { checkJwt } from '@middlewares/checkJwt';  

const routes = Router();

routes.get("/", checkJwt, CustomerController.list); // Pega todos os clientes
routes.get("/:id", checkJwt, CustomerController.index); // Pega um único cliente
routes.post("/", checkJwt, CustomerController.create); // Criar um cliente
routes.put("/:id", checkJwt, CustomerController.edit); // Editar um cliente
routes.delete("/:id", checkJwt, CustomerController.delete); // Deletar um cliente

export default routes;