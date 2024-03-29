import {  request, response } from "express";
import { transactionService } from "./transactionService.js";
import { handleError, handleResponse, handleResponseNotData } from "../../common/errorHandlers.js"; 
import { message } from "../../common/message.js";


export const transactionController = {
    getAllTransaction : async( req = request, res = response) =>{
        try{
                const  { query: {blockNumber,hash, to, from }} = req;
                const filter = {}
                if(blockNumber !== undefined) filter.blockNumber = blockNumber;
                if(hash !== undefined) filter.hash = hash;
                if(to !== undefined) filter.to = to;
                if(from !== undefined) filter.from = from;
                const transactions = await  transactionService.getAllTransaction(filter);
                transactions.length == 0 ? handleResponseNotData(res,200, message.message_transaction_empty) : handleResponse(res,200,message.message_success,transactions);
                

        }
        catch(err){
            handleError(err,res);
        }
    }
}