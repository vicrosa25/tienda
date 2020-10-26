import mongoose from "mongoose";

const pedidoEsquema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usuario",
    },
    pedidoItems: [
      {
        nombre: { type: String, required: true },
        cantidad: { type: Number, required: true },
        imagen: { type: String, required: true },
        precio: { type: Number, required: true },
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Producto",
        },
      },
    ],
    direccionEnvio: {
      direccion: { type: String, required: true },
      ciudad: { type: String, required: true },
      codigoPostal: { type: String, required: true },
      pais: { type: String, required: true },
    },
    metodoPago: {
      type: String,
      required: true,
    },
    resultadoPago: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    impuestos: {
      type: Number,
      required: true,
      default: 0.0,
    },
    gastosEnvio: {
      type: Number,
      required: true,
      default: 0.0,
    },
    precioTotal: {
      type: Number,
      required: true,
      default: 0.0,
    },
    estaPagado: {
      type: Boolean,
      required: true,
      default: false,
    },
    fechaPago: {
      type: Date,
    },
    estaEntregado: {
      type: Boolean,
      required: true,
      default: false,
    },
    fechaEntrega: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Pedido = mongoose.model("Pedido", pedidoEsquema);

export default Pedido;
