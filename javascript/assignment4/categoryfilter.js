var products = [
    {
        "id": 1,
        "name": "Rustic Marble Computer",
        "price": 7997.0,
        "category": "Computers",
        "stock": 647,
        "cod_eligible": true
    },
    {
        "id": 2,
        "name": "Sleek Copper Clock",
        "price": 6177.0,
        "category": "Computers",
        "stock": 436,
        "cod_eligible": true
    },
    {
        "id": 3,
        "name": "Ergonomic Concrete Pants",
        "price": 1732.0,
        "category": "Baby",
        "stock": 68,
        "cod_eligible": true
    },
    {
        "id": 4,
        "name": "Gorgeous Linen Table",
        "price": 4667.0,
        "category": "Tools",
        "stock": 123,
        "cod_eligible": true
    },
    {
        "id": 5,
        "name": "Heavy Duty Silk Knife",
        "price": 3348.0,
        "category": "Grocery",
        "stock": 37,
        "cod_eligible": true
    },
    {
        "id": 6,
        "name": "Incredible Plastic Hat",
        "price": 4277.0,
        "category": "Electronics",
        "stock": 517,
        "cod_eligible": true
    },
    {
        "id": 7,
        "name": "Ergonomic Plastic Coat",
        "price": 8983.0,
        "category": "Baby",
        "stock": 420,
        "cod_eligible": true
    },
    {
        "id": 8,
        "name": "Enormous Rubber Table",
        "price": 6342.0,
        "category": "Music",
        "stock": 583,
        "cod_eligible": true
    },
    {
        "id": 9,
        "name": "Heavy Duty Marble Table",
        "price": 9158.0,
        "category": "Kids",
        "stock": 447,
        "cod_eligible": true
    },
    {
        "id": 10,
        "name": "Intelligent Silk Bench",
        "price": 8902.0,
        "category": "Garden",
        "stock": 72,
        "cod_eligible": true
    }]
/*TEST CASE - 

1. findByCategory(products, 'Computers');
    return  [ { id: 1, name: 'Rustic Marble Computer', price: 7997, category: 'Computers', stock: 647, cod_eligible: true }, { id: 2, name: 'Sleek Copper Clock', price: 6177, category: 'Computers', stock: 436, cod_eligible: true } ]

2. findByCategory(products, 'Sports'); 
return []*/

function findByCategory(a, b) {
    var result;
    //var words = [];
result = a.filter(function(value){
 return value.category === b;
});
return result;
}
console.log(findByCategory(products, 'Computers'));//it returns the value if the condition satisfies, if not it returns an empty array