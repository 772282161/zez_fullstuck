// 将一个栈当作输入栈，用于压入 push 传入的数据；另一个栈当作输出栈，用于 pop 和 peek 操作。
// 每次 pop 或peek 时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。

var MyQueue = function(){
    this.inStack=[]//输入栈
    this.outStack=[]//输出栈
};

MyQueue.prototype.push=function(x){
    this.inStack.push(x)//压栈
}

MyQueue.prototype.pop=function(){
    if(!this.outStack.length){
        this.in2out()
    }
    return this.outStack.pop()
}

MyQueue.prototype.peek=function(){
    if(!this.outStack.length){
        this.in2out()
    }
    return this.outStack[this.outStack.length-1]
}

MyQueue.prototype.empty=function(){
    return this.outStack.length===0&&this.inStack.length===0
}

MyQueue.prototype.in2out=function(){
    while(this.inStack.length){
        this.outStack.push(this.inStack.pop())
    }
}