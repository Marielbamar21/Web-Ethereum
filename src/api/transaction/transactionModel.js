import { mongoose , Schema} from "mongoose";



const transactionSchema = new Schema({
            blockNumber: { type : Number, required : true},
            blockHash: { type: String , default : "not data"},
            index: { type: Number , default : null},
            hash: { type: String ,required : true},
            type: { type: Number , default : null},
            to: { type: String , default : "not data"},
            from: { type: String ,required : true},
            nonce: { type: Number , default : null},
            gasLimit: {type : BigInt, default : null},
            gasPrice: {type : BigInt, default : null},
            maxPriorityFeePerGas: {type : BigInt, default : null},
            maxFeePerGas: {type : BigInt, default : null},
            data: { type: String , default : "not data"},
            value: { type: BigInt , default : null},
            chainId: {type : BigInt , default : null},
            accessList: {type: Array , default:null},
            dateCreation : {type : Date , default : Date.now}

},{collection :'transaction'});

export const  transactionModel = mongoose.model('transaction',transactionSchema)