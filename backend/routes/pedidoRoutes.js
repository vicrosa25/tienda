import express from "express";
import {
  creaPedidoItems,
  pedidoPorId,
} from "../controllers/pedidoController.js";
import { autorizacion } from "../midleware/autorizacion.js";

const router = express.Router();

// Rutas
router.route("/").post(autorizacion, creaPedidoItems);
router.route("/:id").get(autorizacion, pedidoPorId);

export default router;
