import express from "express";
import {
  autorizaUsuario,
  getPerfilUsuario,
} from "../controllers/usuarioController.js";

import { autorizacion } from "../midleware/autorizacion.js";

const router = express.Router();

router.post("/login", autorizaUsuario);
router.route("/perfil").get(autorizacion, getPerfilUsuario);

export default router;
