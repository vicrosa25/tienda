import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import usuarios from "./data/usuarios.js";
import productos from "./data/productos.js";
import Usuario from "./modelos/usuarioModelo.js";
import Producto from "./modelos/productoModelo.js";
import OrdenCompra from "./modelos/ordenCompraModelo.js";
import conectaDB from "./config/db.js";

dotenv.config();

conectaDB();

const importarDatos = async () => {
  try {
    await Usuario.deleteMany();
    await Producto.deleteMany();
    await OrdenCompra.deleteMany();

    const usuariosCreados = await Usuario.insertMany(usuarios);

    const adminId = usuariosCreados[0]._id;

    const productosParaCrear = productos.map((producto) => {
      return { ...producto, usuario: adminId };
    });

    await Producto.insertMany(productosParaCrear);

    console.log("Datos guardados en la BD".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const borrarDatos = async () => {
  try {
    await Usuario.deleteMany();
    await Producto.deleteMany();
    await OrdenCompra.deleteMany();

    console.log("Datos borrados de la BD".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  borrarDatos();
} else {
  importarDatos();
}
