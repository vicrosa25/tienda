import asyncHandler from "express-async-handler";
import Pedido from "../modelos/pedidoModelo.js";

// @desc    Crea un pedido
// @route   POST /api/pedidos
// @access  Private
const creaPedidoItems = asyncHandler(async (req, res) => {
  const {
    pedidoItems,
    direccionEnvio,
    metodoPago,
    precioItems,
    impuestos,
    gastosEnvio,
    precioTotal,
  } = req.body;

  if (pedidoItems && pedidoItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const pedido = new Pedido({
      pedidoItems,
      usuario: req.usuario._id,
      direccionEnvio,
      metodoPago,
      precioItems,
      impuestos,
      gastosEnvio,
      precioTotal,
    });

    const pedidoCreado = await pedido.save();
    res.status(201).json(pedidoCreado);
  }
});

// @desc    Obtiene un pedido de la BD por su ID
// @route   GET /api/pedidos/:id
// @access  Private
const pedidoPorId = asyncHandler(async (req, res) => {
  const pedido = await Pedido.findById(req.params.id).populate(
    "ususario",
    "nombre email"
  );

  if (pedido) {
    res.json(pedido);
  } else {
    res.status(404);
    throw new Error("No se encuentra el pedido");
  }
});

export { creaPedidoItems, pedidoPorId };
