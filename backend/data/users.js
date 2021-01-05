import bcrypt from "bcryptjs";

const users = [
  {
    name: "Dan Hendrix",
    email: "danhendrix.v@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jose Bayani",
    email: "jose.v@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bayani Jose",
    email: "bayani.v@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
