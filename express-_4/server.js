import express from 'express'
import connection from './connection.js';
import router from './router.js';
import env from 'dotenv'
env.config()
const app=express()
app.use('/api',router)
connection().then(()=>{
    app.listen(process.env.port,()=>{
        console.log(`http://localhost:${process.env.port}`);
    })
}).catch((error)=>{
    console.log(error);
})