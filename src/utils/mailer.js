// configurar nodemailer para enviar correos con mi cuenta de gmail
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "mail.neb.com.ve",
  port: 2525,
  secure: true,
  auth: {
    user: "noreply@neb.com.ve",
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;
