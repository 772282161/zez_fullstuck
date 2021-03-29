function identify(){
    return this.name.toUpperCase();
}

function speak(){
    var greeting = "Hello,I am "+identify.call(this)
    console.log(greeting)
}
var me={
    name:"Good"
}
var you={
    name:"Morning"
}
identify.call(me)
identify.call(you)

speak.call(me)
speak.call(you)