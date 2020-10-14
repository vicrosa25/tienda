import express from "express";
import { autorizaUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/login", autorizaUsuario);

export default router;
