import mongoose from "mongoose";
import { config } from "../../config/config/index.js";
import { MongoMemoryServer } from "mongodb-memory-server"

let  mongodb = await MongoMemoryServer.create();

export const openDatabase = async () => {
    try {

       
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
    }
export const closeDatabase = async() => {

        try{
                await mongodb.stop();
        }
        catch(err){
            console.log('Error al cerrar', err);
            return Promise.reject(err);
        }
    }
