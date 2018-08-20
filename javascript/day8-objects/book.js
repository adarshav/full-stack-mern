var book1 = {
    name:'Yogi',
    isbn:'123456789',
    price:324,
    isprime: true,
    type: 'paperBack',
    format:['HardCover','CD','kindle']
};
var book2 = {
    name:'Bhogi',
    isbn:'234567',
    price:423,
    isprime:false,
    type:'HardCover',
    format:['cd', 'kindle']
};
var book3 = {
    name:'Rogi',
    isbn:'4567890',
    price:324,
    isprime:true,
    type:'paperBack',
    format:['cd', 'kindle']
};
var books = [];
books.push(book1, book2, book3);
console.log(books);
