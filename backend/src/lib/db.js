import mongoose from 'mongoose';
import {ENV} from './env.js';

export const connectDB=async()=>{
    try{
        if(!ENV.DB_URL){
            throw new Error("DB_URL is not defined in your enviroment varible")
        }
        const conn=await mongoose.connect(ENV.DB_URL)
        console.log("connection successfull",conn.connection.host);  
    } 
    catch(err){
        console.log("Failed to connect",err);
        process.exit(1);
    }
}