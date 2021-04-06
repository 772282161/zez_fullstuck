var a =1
function f1(){
    let a=2
    function f2(){
        let b =3
        console.log(a)
        
    }
    f2()
    console.log(a,'------')
}
f1()
