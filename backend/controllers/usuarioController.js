import asyncHandler from "express-async-handler";
import Usuario from "../modelos/usuarioModelo.js";
import generaToken from "../utils/generaToken.js";

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

// @desc    Actualiza el perfil del usuario logeado
// @route   PUT /api/usuarios/perfil
// @access  Privado
const actualizaPerfilUsuario = asyncHandler(async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (usuario) {
    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.email = req.body.email || usuario.email;
    if (req.body.password) {
      usuario.password = req.body.password;
    }

    const usuarioActualizado = await usuario.save();

    res.json({
      _id: usuarioActualizado._id,
      nombre: usuarioActualizado.nombre,
      email: usuarioActualizado.email,
      esAdmin: usuarioActualizado.esAdmin,
      token: generaToken(usuarioActualizado._id),
    });
  } else {
    res.status(404);
    throw new Error("Usuario no encontrado");
  }
});

export {
  autorizaUsuario,
  getPerfilUsuario,
  registraUsuario,
  actualizaPerfilUsuario,
};
