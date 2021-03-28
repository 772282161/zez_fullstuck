class Cat<T> {
    private type:T;
    constructor(type:T){
        this.type=type
    }
}

// 动态的给定时 
const cat:Cat<number>=new Cat<number>(438);


