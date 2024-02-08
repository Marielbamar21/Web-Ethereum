import express from "express";
import cors from "cors";
import { config } from "./config/config/index.js";
import { alchemySubscription } from "./src/connection/alchemyConnection.js"

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(config.port, () => console.log(`El servidor esta escuchando en el puerto ${config.port}`));

alchemySubscription();

