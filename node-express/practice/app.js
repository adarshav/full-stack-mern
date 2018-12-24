const express = require('express');
const app = express();//npm install -g --save express
 const bodyParser = require('body-parser');//npm install --save body-express

// app.use(bodyParser.json());

//logger middlerware
app.use((req, res, next) => {
    console.log(`${req.method} || ${req.ip} || ${req.url} || ${new Date()}`);
    next();
})

app.get('/', (req, res) => {
    res.send({
        msg:'welcome to the product catalog'
    })
});

let products = [
    {
        id:1, 
        name:'marker',
        price:15
    },
    {
        id:2,
        name:'scale', 
        price:10
    },
    {
        id:3,
        name:'board',
        price:75
    }
];

//route handlers
app.get('/products', (req, res) => {
    res.send(products);
});

app.get('/products/:id', (req, res) => {
    let product = products.find((product) => {
        return product.id == req.params.id
    });
    if(product) {
        res.send(product);
    } else {
        res.send(`product with id ${req.params.id} not found`);
    }
});

//post
app.post('/products', (req ,res) => {
    console.log(req.body);
    let product = req.body;
    products.push(product);
    res.send({
        products,
        notice:'successfully created'
    })
})
app.listen(3000, function() {
    console.log('listening on port 3000');
})
