/*2. Create a class called Book to represent a book. A Book should include four pieces of information as instance variables‐a book name, an ISBN number, an author name and a publisher. Your class should have a constructor that initializes the four instance variables. Provide a method named getBookInfo that returns the description of the book as a String (the description should include all the information about the book). You should use this keyword in member methods and constructor.
*/
class Book {
    constructor(name, number, author, publisher) {
        this.name = name;
        this.number = number;
        this.author = author;
        this.publisher = publisher;
    }
    getBookInfo() {
        return `Book Name:${this.name} ISBN:${this.number} Author: ${this.author} publisher:${this.publisher}`;
    }
} 
var b1 = new Book('Aavarana', '12345asd', 'SL Bhairappa', 'Samruddhi');
console.log(b1.getBookInfo());
