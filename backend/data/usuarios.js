import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin Usuario",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Juan Perez",
    email: "juan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Maria Rodriguez",
    email: "maria@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
