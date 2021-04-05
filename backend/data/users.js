import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    isConfirmed: true,
  },
  {
    name: "Dan Hendrix",
    email: "danhendrix.v@gmail.com",
    isAdmin: true,
    isConfirmed: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "john@example.com",
    isConfirmed: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    isConfirmed: true,
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
