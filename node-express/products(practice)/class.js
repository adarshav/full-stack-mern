
let products = [
    {
        id:1,
        name:'pen',
        price:20,
        category_id:1
    },
    {
        id:2,
        name:'pencil',
        price:10,
        category_id:1
    },
    {
        id:3,
        name:'scale',
        price:10,
        category_id:2
    },
    {
        id:4,
        name:'stationary',
        price:50,
        category_id:2
    }
];
class Product {
    constructor(products) {
        this.products = products;
    }
    static findAll() {
        return products;
    }
    static findOne(id) {
        let product = products.find((product) => {
            return product.id == id
        });
        return product; 
    }
    static findOneAndUpdate(id) {
        let product = products.find((product) => {
            return product.id == id
        });
        return product; 
    }
    static findOneAndRemove(id) {
        let product = products.find((product) => {
            return product.id == id
        });
        return product; 
    }
    static findByCategory(id) {
        let productsByCategory = [];
        products.forEach((product) => {
            if(product.category_id == id) {
                productsByCategory.push(product);
            }
        });
        return productsByCategory;
    }
}

module.exports = {
    Product
}
//let p1 = new Product();
// console.log(Product.findAll());
// console.log('---------------------------');
// console.log(Product.findOne(2));
// console.log(Product.findOneAndUpdate(1));
// console.log(Product.findOneAndRemove(3));
// console.log(Product.findByCategory(2));



