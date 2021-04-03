// 1.上个阶段  executor 执行器的实现
// 2.状态转移 // 如何让执行器决定状态转移的处理
// 3.thenable

class Promise{  
    constructor(executor){
        this.state = 'pending';// 初始化未完成状态
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        this.onRejectedCallbacks=[];
        this.onResolvedCallbacks=[];
        // 异步任务会把结果交给resolve
        let resolve = (value)=>{
            if(this.state == 'pending'){
                console.log('fulfilled')
                this.value=value
                this.state='fulfilled'
                this.onResolvedCallbacks.forEach(fn=>fn());
                // onFulFilled 执行一下 记忆功能
            }
            
        }
        let reject = (reason)=>{
            if(this.state=='pending'){
                console.log('rejected')
                this.reason=reason
                this.state='rejected'
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        }
        try{
            executor(resolve,reject);
        }catch(err){
            reject(err)
        }
        
    }
    // 当前promise 解决了，完成了状态转移，把控制权交出来
    then(onFullfilled,onRejected){
        console.log('then fulfilled')
        // 状态为fulfilled 时，传入成功后的回调，将执行权转移
        if(this.state == 'fulfilled'){
            console.log('onfulfilled')
            onFullfilled(this.value);// 未执行
        }
        // 状态为 rejected时，传入失败后的回调，
        if(this.state=='rejected'){
            onRejected(this.reason);
        }
        if(this.state=='pending'){
            this.onResolvedCallbacks.push(()=>{
                onFullfilled(this.value);
            })
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason)
            })
        }
    }
}

new Promise((resolve,reject)=>{
    // 将花时间比较多的任务封装起来，以实现异步变同步
    setTimeout(()=>{
        console.log(0);
        resolve(10);
        // reject();
        // 语法错误
        // throw new Error('出错了');
    },3000);
}).then((data)=>{// 两个参数
    console.log(data,'++++++=');
})