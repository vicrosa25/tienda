import express from "express";
import { creaPedidoItems } from "../controllers/pedidoController.js";
import { autorizacion } from "../midleware/autorizacion.js";

const router = express.Router();
router.route("/").post(autorizacion, creaPedidoItems);

export default router;
