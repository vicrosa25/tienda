import express from "express";
import {
  getProductos,
  getProductoPorId,
} from "../controllers/productoController.js";

const router = express.Router();

router.route("/").get(getProductos);
router.route("/:id").get(getProductoPorId);

export default router;
