class Product {
    constructor(data) {
        this.name = data.name;
        this.price = data.price;
    }
    details(){
        return `
        name:${this.name}
        price:${this.price}`
    }
    method1() {
        return 'this is a method defined inside Product class'
    }
}

class Book extends Product {
    constructor(data) {
        super(data)
        this.author = data.author
        this.genre = data.genre
    }
    details() {
        return `
        ${super.details()}//super keyword is used to call the methods of parent class
        author:${this.author}
        genre:${this.genre}`
    }
}
const b1 = new Book({name:'the day of the jackal', price:345, author:'fredrick', genre:'thriller'})
console.log(b1.name);
console.log(b1.price);
console.log(b1.author);
console.log(b1.genre);
console.log(b1.method1());
console.log(b1.details());


