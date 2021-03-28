// import { request, response } from "express"
import {Request,Response} from 'express';//@types/express

import {createPost} from './post.service'



export const store = async(request:Request,
    response:Response)=>{
        console.log(request.body,request.query.id,'-----')
        const { title,content } = request.body
        // 存 -> 数据存储服务 service
        const data = await createPost({title,content})
        response.status(201).send('王总嫖娼又不给钱')//
        // console.log(response)
}