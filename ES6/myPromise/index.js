let a = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('aaaa')
            resolve('ok')
        },1000)
    })
}

let b = function(){
    setTimeout(()=>{
        console.log('bbb')
    },500)
}

let c = function(){
    setTimeout(()=>{
        console.log('cccc')
    },100)
}

a().then(b).then(c) // a c b  .then(c) 接在a()后面，与b同级 