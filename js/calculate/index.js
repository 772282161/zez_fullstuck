// ES6 函数表达式   箭头函数  level A 1 B2 C3 D5
const calculateBounce = (salary,level='C') =>{
    if(level==="S"){
        return salary*18
    }if(level==="A"){
        return salary*(12+1)
    }if(level==="B"){
        return salary*(12+2)
    }if(level==="C"){
        return salary*(12+3)
    }if (level==="D"){
        return salary*(12+5)
    }
}
console.log(calculateBounce(22000,'S'));
console.log(calculateBounce(22000,));