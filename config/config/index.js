import dotenv from "dotenv";

const conf = dotenv.config();

export const config ={
    port: process.env.PORT,
    host_uri_bd : process.env.HOST_URI_BD,
    alchemy_key : process.env.ALCHEMY_KEY
}