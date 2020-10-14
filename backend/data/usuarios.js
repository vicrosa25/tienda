import bcrypt from "bcryptjs";

const users = [
  {
    nombre: "Admin Usuario",
    email: "admin@ejemplo.com",
    password: bcrypt.hashSync("123456", 10),
    esAdmin: true,
  },
  {
    nombre: "Juan Perez",
    email: "juan@ejemplo.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    nombre: "Maria Rodriguez",
    email: "maria@ejemplo.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
