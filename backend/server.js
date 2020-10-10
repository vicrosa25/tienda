import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import conectaDB from "./config/db.js";
import productos from "./data/productos.js";

dotenv.config();
const PUERTO = process.env.PUERTO;
const MODO = process.env.NODE_ENV;

conectaDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const producto = productos.find((p) => p._id === req.params.id);
  res.json(producto);
});

app.listen(
  PUERTO,
  console.log(
    `Servidor funcionando en modo ${MODO} sobre el puerto ${PUERTO}`.yellow.bold
  )
);
