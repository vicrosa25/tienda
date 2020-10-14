import asyncHandler from "express-async-handler";
import Usuario from "../modelos/usuarioModelo.js";
import generaToken from "../utils/generaToken.js";

// @desc    Autorización usuario y conseguir token
// @route   POST /api/usuarios/login
// @access  Publico
const autorizaUsuario = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email });

  if (usuario && (await usuario.comparaPassword(password))) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      isAdmin: usuario.isAdmin,
      token: generaToken(usuario._id),
    });
  } else {
    res.status(401);
    throw new Error("Contraseña o email inválidos");
  }
});

export { autorizaUsuario };
