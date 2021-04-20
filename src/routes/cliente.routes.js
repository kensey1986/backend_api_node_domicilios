import { Router } from "express";
const router = Router();

import * as clienteCtrl from "../controllers/cliente.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
  ],
  clienteCtrl.createCliente
);

router.get("/", authJwt.verifyToken, clienteCtrl.getClientes);



router.put(
  "/:clienteId",
  [authJwt.verifyToken, authJwt.isAdmin],
  clienteCtrl.updateClienteById
);

export default router;
