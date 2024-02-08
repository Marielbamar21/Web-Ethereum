import database  from '../../database/database.js';
import { transactionModel } from "./transactionModel.js"


export const transactionService = {
    createTransaction : async(body) =>{
        await database();
        const newTransaction = new transactionModel(body);
        const transaction = await newTransaction.save();
        return transaction;
    }

}