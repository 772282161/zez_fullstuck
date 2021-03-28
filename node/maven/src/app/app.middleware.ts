import {Request,Response,NextFunction} from 'express'
export const defaultErrorHandler = (error:any,request:Request,response:Response,next:NextFunction)=>{
    if(error.message){
        console.log(error.message,'-------');
    }
    let statusCode:number,message:string
    /**
     * 处理异常
     */
    switch(error.message){
        //用户 400
        case 'NAME_IS_REQUIRED':
            statusCode=400;
            message='提供用户名';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode=400;
            message='请提供密码';
            break;
        case 'USER_ALREADY_EXSIT':
            statusCode=409;
            message="用户已被占用"
            break;
        case 'USER_DOES_NOT_EXIT':
            statusCode=400;
            message='用户名不存在'
            break;
        case 'USER_DOES_NOT_OWN_RESOURCE':
            statusCode=403;
            message='用户禁止访问'
            break;
        case 'UNAUTHRIZED':
            statusCode=401;
            message="请先登录";
            break;
        case 'NOT_FOUND':
            statusCode=404;
            message='未找到资源';
            break;
        default:
            statusCode=500;
            message='正在....';
            break;
    }
    response.status(statusCode).send({message})
}
