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
      esAdmin: usuario.esAdmin,
      token: generaToken(usuario._id),
    });
  } else {
    res.status(401);
    throw new Error("Contraseña o email inválidos");
  }
});

// @desc    Retorna el perfil del usuario logeado
// @route   GET /api/usuarios/perfil
// @access  Privado
const getPerfilUsuario = asyncHandler(async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (usuario) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      esAdmin: usuario.esAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Usuario no encontrado");
  }
});

// @desc    Registra un usuario
// @route   POST /api/usuarios
// @access  Público
const registraUsuario = asyncHandler(async (req, res) => {
  const { nombre, email, password } = req.body;

  const estaRegistrado = await Usuario.findOne({ email });

  if (estaRegistrado) {
    res.status(400);
    throw new Error("Usuario ya registrado");
  }

  const usuario = await Usuario.create({
    nombre,
    email,
    password,
  });

  if (usuario) {
    res.status(201).json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      esAdmin: usuario.esAdmin,
      token: generaToken(usuario._id),
    });
  } else {
    res.status(401);
    throw new Error("Datos de usuario incorrectos");
  }
});

export { autorizaUsuario, getPerfilUsuario, registraUsuario };
