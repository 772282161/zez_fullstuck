// 打造 ctx

let proto = {
    // url:request.url
}

function defineGetter(prop,name){// 将函数绑定在当前对象的属性上
    proto.__defineGetter__(name,function(){
        return this[prop][name]// this == ctx
    })
}

defineGetter('request','url') // url == request.url
defineGetter('request','path')

module.exports = proto