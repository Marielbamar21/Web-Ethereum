import express from "express";
import cors from "cors";
import { config } from "./config/config/index.js";
import { alchemySubscription } from "./src/connection/alchemyConnection.js";
import { transactionRouter } from "./src/api/transaction/transactionRouter.js";
import { database } from "./src/database/database.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/web-ethereum', transactionRouter);


app.listen(config.port, () => console.log(`The server is listening on port ${config.port}`));

await database.openDatabase();

process.on('exit', async () => {
    await database.closeDatabase();
});

process.on('SIGINT', async () => { await database.closeDatabase();
});

alchemySubscription();

