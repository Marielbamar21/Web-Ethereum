import { query,validationResult }from "express-validator";
import { handleErrorValidator, handleResponse } from "../../../common/errorHandlers.js";
import { message } from "../../../common/message.js"

export const validator ={
    hashValidator:  async(req,res ,next) =>{
    try{ 
        const validKeys = ['hash', 'blockNumber','to','from'];

        const invalidKeys = Object.keys(req.query).filter(key => !validKeys.includes(key));

        if (invalidKeys.length > 0) {
                return res.status(400).json({ error: `Invalid query keys: ${invalidKeys.join(', ')}` });
        }

        await query('hash').optional().matches(/^(0x)?[0-9a-fA-F]+$/).run(req);
        await query('to').optional().matches(/^(0x)?[0-9a-fA-F]+$/).run(req);
        await query('from').optional().matches(/^(0x)?[0-9a-fA-F]+$/).run(req);
        const result = validationResult(req);

        !result.isEmpty() ? handleResponse(res,400,message.err_validator_hash) : next();
    }
    catch(err){
        handleErrorValidator(err,res);
    }
    

},
 numberValidator:  async(req,res ,next) =>{
    try{
        await query('blockNumber').optional().isNumeric().run(req);
        const result = validationResult(req);

        !result.isEmpty() ? handleResponse(res,400, message.err_validator_number) : next();
    }
    catch(err){
        handleErrorValidator(err,res);
    }
}
}

