import { AlchemyProvider} from "ethers";
import { config } from "../../config/config/index.js";
import { transactionService } from "../api/transaction/transactionService.js";


export const alchemySubscription = () => {
    const provider = new AlchemyProvider('goerli', config.alchemy_key);

    provider.on('block', async (blockNumber) => {
        try {
            console.log(`Nuevo bloque recibido. Bloque numero ${blockNumber} `);
            const block = await provider.getBlock(blockNumber);
            const transactions = block.transactions;
            transactions.forEach(async(element) => {
                                                    const transaction = await provider.getTransaction(element);
                                                    await transactionService.createTransaction(transaction)
                                                    console.log(transaction);
                
                                                });
        } catch (error) {
            console.error('Error al obtener información del bloque:', error);
        }
    });
};
