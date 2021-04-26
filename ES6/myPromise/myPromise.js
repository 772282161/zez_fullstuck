const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
    const that = this
    that.state = PENDING
    that.value = null
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value){
        if(that.state === PENDING){
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb=>{
                cb(that.value)
            })
        }
        
    }

    function reject(value){
        if(that.state===PENDING){
            that.state=REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb=>{
                cb(that.value)
            })
        }
    }


    try{
        fn(resolve,reject)
    }catch(e){
        reject(e)
    }
}

MyPromise.prototype.then=function(onFulfilled,onRejected){
    const that = this
    onFulfilled = typeof onFulfilled==='function' ? onFulfilled : value=>value
    onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}

    if(that.state===PENDING){
        that.resolvedCallbacks.push(onFulfilled)
    }
    if(that.state ===RESOLVED){
        onFulfilled()
    }
}

new MyPromise().then((res)=>{
    console.log(res);
})