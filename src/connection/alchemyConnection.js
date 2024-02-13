import { AlchemyProvider} from "ethers";
import { config } from "../../config/config/index.js";
import { transactionService } from "../api/transaction/transactionService.js";

const testNetwork = 'goerly'

const provider = new AlchemyProvider('mainnet', config.alchemy_key); 

export const alchemySubscription = () => {
    provider.on('block', async (blockNumber ) => {
        try {
            console.log(`New block received. Block number ${blockNumber} `);
            const block = await provider.getBlock(blockNumber);
            const transactions = block.transactions;
            console.log(`Number of transactions in the block : ${transactions.length}`);
            const gettranstns = await Promise.all( transactions.map(async(element) => await getTrans(element)));
            const transaction = await transactionService.createTransaction(gettranstns);
            console.log(transaction);
            
            }
        catch(err){
            throw err;
        }
    });

}
const getTrans= async(transaction, currentRetry =3) =>{
            let count =0;
            while (count < currentRetry){
                    try{
                        return await provider.getTransaction(transaction);
                    }
                    catch(err){
                        const e = err.error;
                        console.log(`Retray : ${count}`);
                        if (e.code == 429) { 
                        console.log(`Error ${err.code}: ${err.message}. Retrying...`);
                        setTimeout(() =>{   currentRetry++;}, 1000);
                        }
                        else{
                                console.error('Error obtaining transaction information: ', err);
                                throw err;
                        }
                    }
                                                                    
            }
        }
