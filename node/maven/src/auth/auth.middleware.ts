import { NextFunction, request, response } from "express";

export const authGard=(request,response,next:NextFunction)=>{
    console.log('到auth一游');
    next(new Error('UNAUTHORIZED'))
}
