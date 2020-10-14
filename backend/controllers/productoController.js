import asyncHandler from "express-async-handler";
import Producto from "../modelos/productoModelo.js";

// @desc    busca todos los productos en la BD
// @route   GET /api/productos
// @access  Publico
const getProductos = asyncHandler(async (req, res) => {
  const productos = await Producto.find({});
  res.json(productos);
});

// @desc    busca un producto en la BD
// @route   GET /api/productos/:id
// @access  Publico
const getProductoPorId = asyncHandler(async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404);
    throw new Error("Producto no encontrado");
  }
});

export { getProductos, getProductoPorId };
