import mongoose from "mongoose";
import { config } from "../../config/config/index.js";


const database = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log('Ya se encuentra conectado a la base de datos');
            return Promise.resolve();
        } else {
            await mongoose.connect(config.host_uri_bd);
            console.log('Base de Datos conectada exitosamente');
            return Promise.resolve();
        }
    } catch (err) {
        return Promise.reject(err);
    }
};

export default database;