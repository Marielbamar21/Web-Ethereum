import { transactionController } from "./transactionController.js";
import { validator } from "./middleware/validator.js"
import { Router } from "express";

const router = Router();

    router.get('/transactions',[validator.hashValidator, validator.numberValidator], transactionController.getAllTransaction );


export const transactionRouter = router;