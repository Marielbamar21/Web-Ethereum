import mongoose from "mongoose";
import { config } from "../../config/config/index.js";
import { handleError } from "../common/errorHandlers.js";
import { MongoMemoryServer } from "mongodb-memory-server"

let mongodb

export const database = {
    
    openDatabase : async () => {
    try {
        mongodb = await MongoMemoryServer.create();
        const uri = mongodb.getUri();
        if (mongoose.connection.readyState === 1) {
            console.log(`It's already connected to the database`);
            return Promise.resolve();
        } else {
            await mongoose.connect(uri);
            console.log('Database successfully connected');
            return Promise.resolve();
        }
    } catch (err) {
        return Promise.reject(err);
    }
    },
    closeDatabase : async(mongodb) => {

        try{
            if(mongodb){
                await mongodb.stop();
                console.log( 'database closed');
            }
        }
        catch(err){
           return Promise.reject(err);
        }
    }

}