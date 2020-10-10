import mongoose from "mongoose";

const valoracionEsquema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nota: {
      type: Number,
      required: true,
    },
    comentario: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productoEsquema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Usuario",
    },
    nombre: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    valoracion: [valoracionEsquema],
    valoracionMedia: {
      type: Number,
      required: true,
      default: 0,
    },
    numeroValoraciones: {
      type: Number,
      required: true,
      default: 0,
    },
    Precio: {
      type: Number,
      required: true,
      default: 0,
    },
    numEnAlmacen: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Producto = mongoose.model("Producto", productoEsquema);

export default Producto;
