import mongoose from 'mongoose';
import {ENV} from './env.js';

export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(ENV.DB_URL)
        console.log("connection successfull",conn.connection.host);  
    } 
    catch(err){
        console.log("Failed to connect",err);
        process.exit(1);
    }
}