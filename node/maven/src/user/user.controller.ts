import {Response,Request,NextFunction} from 'express'
import * as userService from './user.service'
export const store = async(request:Request,response:Response,next:NextFunction)=>{
    const {name,password}=request.body;
    try{
        const data = await userService.createUser({
            name,password
        })
    }catch(error){
        next(error)
    }
}