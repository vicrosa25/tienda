import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import conectaDB from "./config/db.js";
import productoRoutes from "./routes/productoRoutes.js";

dotenv.config();
const PUERTO = process.env.PUERTO;
const MODO = process.env.NODE_ENV;

conectaDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api/productos", productoRoutes);

app.listen(
  PUERTO,
  console.log(
    `Servidor funcionando en modo ${MODO} sobre el puerto ${PUERTO}`.yellow.bold
  )
);
