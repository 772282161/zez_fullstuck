//constructor  构造函数 
function Book(number,name,author){
    this.number=number;
    this.name=name;
    this.author=author;
}

let theHabbit = new Book('0-395-07122-4',"The Habbit","J.R.R.Tolkien");
console.log(theHabbit.number);
