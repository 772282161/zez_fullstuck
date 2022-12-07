const PromiseAll = iterator =>  {
    // PromiseAll 接收的是一个迭代器(需要转换为数组)，大概率是数组
    let promises = Array.from(iterator)
    const data = []
    let count = 0

    return new PromiseAll((resolve,reject)=>{
        promises.forEach((item,index)=>{
            Promise.resolve(item)
                .then(res=>{
                    data[index] = res
                    count++
                    if(count === promises.length){
                        resolve()
                    }
                })
                .catch(err=>{
                    reject(err)
                })
        })
        if(!promises.length) {
            resolve()
        }
    })
}