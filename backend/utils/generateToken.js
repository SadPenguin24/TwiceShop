import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const generateEmailCode = (id, email) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  return jwt.sign(
    { id },
    process.env.EMAIL_SECRET,
    {
      expiresIn: "1d",
    },
    (err, emailToken) => {
      let nodeUrl = "http://localhost:5000";
      if (process.env.NODE_ENV === production) {
        nodeUrl = "https://twiceshopapp.herokuapp.com";
      }
      const url = `${nodeUrl}/api/users/confirm/${id}/${emailToken}`;

      transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Confirm Email",
        html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
      });
    }
  );
};

export { generateToken, generateEmailCode };
