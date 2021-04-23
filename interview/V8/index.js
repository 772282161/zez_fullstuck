function foo(){
    var a = '燕杰'
    var b = a
    var c = {name:'嫖娼'}
    var d = c
    console.log(a) // 2
    console.log(b) // 1
}
foo()

function bar(){
    var myName = '王总'
    let test1 = 1
    const test2 = 2
    var innreBar = {
        setName:function(newName){
            myName = newName
        },
        getName:function(){
            console.log(test1)
            return myName
        }
    }
    return innreBar
}
var baz = bar()
baz.setName=('嫖娼')

// var baz;
// baz = 12;
// baz = 'abc';
// baz = true;
// console.log(baz)

// console.log(typeof(null))
