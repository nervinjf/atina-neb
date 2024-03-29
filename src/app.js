const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const { userRoutes, tomadorRoutes, aseguradoRoutes, citaRoutes, contactoRoutes, authRoutes, cargoRoutes, empresasRoutes, empleadosRoutes, citaEmpresasRoutes, contactoEmpresasRoutes, 
SContactoRoutes, SCotizacionRoutes, SPersonaRoutes} = require("./routes");
const transporter = require("./utils/mailer");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", "http://tu_dominio.com");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  next();
});

initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

transporter
  .verify() // devuelve una promesa
  .then(() =>
    console.log("Estamos listos para enviar correos a diestra y siniestra")
  );

app.get("/", (req, res) => {
  console.log("Bienvenido al server");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", tomadorRoutes);
app.use("/api/v1", aseguradoRoutes);
app.use("/api/v1", citaRoutes);
app.use("/api/v1", contactoRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", cargoRoutes);
app.use("/api/v1", empresasRoutes);
app.use("/api/v1", empleadosRoutes);
app.use("/api/v1", citaEmpresasRoutes);
app.use("/api/v1", contactoEmpresasRoutes);
app.use("/api/v1", SContactoRoutes);
app.use("/api/v1", SCotizacionRoutes);
app.use("/api/v1", SPersonaRoutes);


app.use(handleError);

module.exports = app;
