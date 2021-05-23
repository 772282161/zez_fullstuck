
//
function Book(isbn,title,author) {
    // this.isbn=isbn;   //public  属性
    // this.title=title;
    // this.author=author;
    this.setIsbn(isbn);
}

Book.prototype = {
    setIsbn(isbn){
        //isbn  不能是this  但是要可读
        // private  私有属性，对象的方法内客可通过this.调用，但是外界不能访问
        //private 内不存在private，约定以_（下划线）开头的就是私有属性
        if(!this.checkIsbn(isbn)) 
            throw new Error('ISBN格式错误');//格式是否正确  throw 抛出异常，代码停止运行
        this._isbn = isbn;
    },
    getIsbn(){
        return this._isbn;
    },
    checkIsbn(isbn){
        if(!isbn) return false;
        return /\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn);//正则表达式  

    }
}

//class  只是语法糖
//private

const jsDontKnow = new Book('978-7-121-29899-8','React全栈','陈玉珏');
// console.log(jsDontKnow.__proto__ == Book.prototype);
console.log(jsDontKnow instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));
console.log(jsDontKnow._isbn);
// jsDontKnow.isbn='ddddd';