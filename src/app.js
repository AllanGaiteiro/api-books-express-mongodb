import express from "express";
import db from "./config/db.connect.js";
import routes from "./routes/index.route.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
