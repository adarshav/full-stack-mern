var axios = require('axios');
function ProductForm(data) {
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
    this.cod = data.cod;
    this.stock = data.stock;
    this.submit = function() {
        var productToSend = {
            name:this.name,
            price:this.price,
            category:this.category,
            cod:this.cod,
            stock:this.stock
        };
        axios.post('http://dct-api-data.herokuapp.com/products.json', productToSend)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }
}
var pr1 = new ProductForm({name:'asd', price:'120', category:'stationary', cod:'', stock:'20'});
pr1.submit();