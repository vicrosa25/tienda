import express from "express";
import {
  autorizaUsuario,
  getPerfilUsuario,
  registraUsuario,
  actualizaPerfilUsuario,
} from "../controllers/usuarioController.js";

import { autorizacion } from "../midleware/autorizacion.js";

const router = express.Router();

router.route("/").post(registraUsuario);
router.post("/login", autorizaUsuario);
router
  .route("/perfil")
  .get(autorizacion, getPerfilUsuario)
  .put(autorizacion, actualizaPerfilUsuario);

export default router;
