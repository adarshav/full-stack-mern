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
function books(book1) {
return `the name of the book is '${book1.name}' number is ${book1.isbn} wwhich comes with type ${book1.type}, it is also avaliable with the format ${book1.format} with reasonable price INR ${book1.price}`;
}
console.log(books(book1));
