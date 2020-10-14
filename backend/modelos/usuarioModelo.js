import mongoose from "mongoose";
import bcryp from "bcryptjs";

const usuarioEsquema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    esAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

usuarioEsquema.methods.comparaPassword = async function (password) {
  return bcryp.compare(password, this.password);
};

const Usuario = mongoose.model("Usuario", usuarioEsquema);

export default Usuario;
