const { create } = require('lodash');
const _=require('lodash');
//1.普通函数 ()  2.自身的递归   subFlow 不平坦  3.不平坦 flatten
const createFlow = (effects=[])=>{
    // console.log(effects,'0000')
    // console.log(_.flatten(effects),'++++++')
    //不要影响外面
    let sources = effects.slice().flat();//slice 会返回一个全新的数组很地址 这一层需要被打理的任务
    // for(let item of sources){
    //     //如果是普通函数请执行
    //     //如果是delay 函数 等待  then 执行
    //     //如果是自身的话递归调用，出口
    //     // -flow
    //     // 每一个item 都去解决  
    //     // 普通函数的话 callback
    //     console.log(item,'------')
    // }
    const run = (callback)=>{
        // sources 有东西
        while(sources.length){
            //sources 为空就解决了
            const task = sources.shift();
            // 余下的我都作为新的一个flow来看待
            const next = ()=>createFlow(sources).run(callback);
            // 退出条件
            if(typeof task ==='function'){
                const res = task();
                if(res?.then){
                    // then得到？
                    res.then(next);
                    console.log('.then')
                    return;
                }
                //本身的递归
            }else if(task?.isFlow){
                //又是一个flow
                task.run(next);
                console.log('.flow')
                return;
            }
        }
        // console.log("调用run")
        callback();
    }
    return{
        run,
        isFlow:true//手动加
    }
}

module.exports=createFlow;