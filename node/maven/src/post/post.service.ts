import {PostModel} from './post.model'
import {connection} from '../app/database/mysql'

/*
新增数据 
*/



export const createPost =async(post:PostModel)=>{
    const statement = `
    INSERT INTO post 
    SET ? 
    `;
    // 每次用户访问，都走数据库吗？ 
    // 保存 
    // list select  Redis做缓存 
    const [data] = await connection.promise().query(statement,post);
    return data;
}