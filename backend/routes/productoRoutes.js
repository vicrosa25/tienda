import express from "express";
import asyncHandler from "express-async-handler";

import Producto from "../modelos/productoModelo.js";

const router = express.Router();

// @desc    busca todos los productos en la BD
// @route   GET /api/productos
// @access  Publico
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const productos = await Producto.find({});
    res.json(productos);
  })
);

// @desc    busca un producto en la BD
// @route   GET /api/productos/:id
// @access  Publico
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const producto = await Producto.findById(req.params.id);

    producto
      ? res.json(producto)
      : res.status(404).json({ message: "Producto no encontrado" });
  })
);

export default router;
