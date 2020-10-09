import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();
const PUERTO = process.env.PUERTO;
const MODO = process.env.NODE_ENV;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PUERTO,
  console.log(`Servidor funcionando en modo ${MODO} sobre el puerto ${PUERTO}`)
);
