import { AlchemyProvider} from "ethers";
import { config } from "../../config/config/index.js";
import { transactionService } from "../api/transaction/transactionService.js";

const testNetwork = 'goerly'

const provider = new AlchemyProvider('mainnet', config.alchemy_key); 

export const alchemySubscription = () => {
    provider.on('block', async (blockNumber, ) => {
        try {
            console.log(`New block received. Block number ${blockNumber} `);
            const block = await provider.getBlock(blockNumber);
            const transactions = block.transactions;
            console.log(`Number of transactions in the block : ${transactions.length}`);
            transactions.forEach(async(element) => {        
                                                                    const retryCount=3;
                                                                    let currentRetry = 0;
                                                                    while (currentRetry < retryCount) {
                                                                    try {
                                                                            const transaction = await provider.getTransaction(element);
                                                                            await transactionService.createTransaction(transaction);
                                                                            return; 
                                                                        } 
                                                                    catch (err) {
                                                                        const e = err.error;
                                                                        console.log(`Retray : ${currentRetry}`);
                                                                        if (e.code == 429) { 
                                                                            console.log(`Error ${err.code}: ${err.message}. Retrying...`);
                                                                            setTimeout(() =>{   currentRetry++;
                                                                                            }, 1000);
                                                                            
                                                                            
                                                                        }
                                                                        else{
                                                                            console.error('Error obtaining transaction information: ', err);
                                                                            throw err;
                                                                        }
                                                                        }
                                                                    }
                                                                    
                    
                })
            }
        catch(err){
            throw err;
        }
    });

}
                                                                
        
