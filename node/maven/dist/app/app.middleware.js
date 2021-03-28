"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const defaultErrorHandler = (error, request, response, next) => {
    if (error.message) {
        console.log(error.message, '-------');
    }
    let statusCode, message;
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '提供用户名';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = '请提供密码';
            break;
        case 'USER_ALREADY_EXSIT':
            statusCode = 409;
            message = "用户已被占用";
            break;
        case 'USER_DOES_NOT_EXIT':
            statusCode = 400;
            message = '用户名不存在';
            break;
        case 'USER_DOES_NOT_OWN_RESOURCE':
            statusCode = 403;
            message = '用户禁止访问';
            break;
        case 'UNAUTHRIZED':
            statusCode = 401;
            message = "请先登录";
            break;
        case 'NOT_FOUND':
            statusCode = 404;
            message = '未找到资源';
            break;
        default:
            statusCode = 500;
            message = '正在....';
            break;
    }
    response.status(statusCode).send({ message });
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=app.middleware.js.map