import express from 'express';
import {ENV} from './lib/env.js'
import path from 'path';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import {serve} from 'inngest/express'
import { functions,inngest } from './lib/inngest.js';
const app=express();
console.log(process.env.PORT);

const __dirname=path.resolve();

//middleware
app.use(express.json());
//credentials true meaning??=>server allows a browser  to allow cookies on request
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use('/api/inngest',serve({client:inngest,functions}));

app.get('/health',(req,res)=>{
    res.status(200).json({msg:"api is up and running"});
})

app.get('/books',(req,res)=>{
    res.status(200).json({msg:"books end point"});
})

//make our app forready or deployment

if(ENV.NODE_ENV==='production'){
   app.use(express.static(path.join(__dirname,"../frontend/dist")));
   app.get('/{*any}',(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
   })
}

const startServer=async()=>{
    try{
        
        await connectDB();
        app.listen(ENV.PORT,()=>{
        console.log(`App is running on http://localhost:${ENV.PORT}`);
        })
    }catch(err){
        console.log("error starting the sever",err);
    }
}

startServer();