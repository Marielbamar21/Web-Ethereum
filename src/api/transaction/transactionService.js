import { transactionModel } from "./transactionModel.js";


export const transactionService = {
    createTransaction : async(body) =>{
        try{
            const newTransaction = new transactionModel(body);
            const transaction = await newTransaction.save();
            return transaction;
        }
        catch(err){
            throw err;
        }
        
    },
    getAllTransaction : async(filter ={}) => {
        try{
            const transactions = await transactionModel.find(filter);
            const transactionsJson = transactions.map(element => {
                return {
                    ...element.toObject(),
                    gasLimit: String(element.gasLimit),
                    gasPrice: String(element.gasPrice),
                    maxPriorityFeePerGas : String(element.maxPriorityFeePerGas),
                    maxFeePerGas :  String(element.maxFeePerGas),
                    value: String(element.value),
                    chainId : String(element.chainId)
                }})
            return transactionsJson;
        }
        catch(err){
            throw err;
        }
    },


}