var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json?category=Books';
axios.get(url)
.then(function(response) {
    var books = response.data;
    var count = 0;
    books.forEach(function(book){
        console.log(`${book.name} ${book.category} ${book.price} ${book.reviews.length}`);
    });
    
})
.catch(function(error) {
    console.log(error);
});