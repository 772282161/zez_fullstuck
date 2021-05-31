import express from 'express';
import {systemConfig} from './config'
const app:express.Application=express();
app.listen(systemConfig.port,()=>{
    console.log(`the server is start at port ${systemConfig.port}`);
})