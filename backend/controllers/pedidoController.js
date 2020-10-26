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

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const pedido = new Pedido({
      pedidoItems,
      user: req.usuario._id,
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

export { creaPedidoItems };
