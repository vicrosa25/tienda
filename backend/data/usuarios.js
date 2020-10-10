import bcrypt from "bcryptjs";

const users = [
  {
    nombre: "Admin Usuario",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    esAdmin: true,
  },
  {
    nombre: "Juan Perez",
    email: "juan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    nombre: "Maria Rodriguez",
    email: "maria@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
