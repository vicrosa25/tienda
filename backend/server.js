import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import conectaDB from "./config/db.js";
import productoRoutes from "./routes/productoRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import { notFound, errorHandler } from "./midleware/errores.js";

dotenv.config();
const PUERTO = process.env.PUERTO;
const MODO = process.env.NODE_ENV;

conectaDB();

const app = express();

// Middleware
app.use(express.json()); // Parsea el body del request a json

app.get("/", (req, res) => {
  res.send("API is running!");
});

// Rutas
app.use("/api/productos", productoRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);

// Errores
app.use(notFound);
app.use(errorHandler);

app.listen(
  PUERTO,
  console.log(
    `Servidor funcionando en modo ${MODO} sobre el puerto ${PUERTO}`.yellow.bold
  )
);
