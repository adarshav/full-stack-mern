const {Product} = require("./class");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;
//middlerware
app.use((req,res,next) => {
    console.log(`${req.method} | ${req.ip} | ${req.url} | ${new Date()}`);
    next();
});
//findAll method
app.get('/products', (req, res) => {
    res.send(Product.findAll());
});

//findOne(id)
app.get('/products/:id', (req, res) => {
    let result = Product.findOne(req.params.id);
    res.send(result);
});

//findOneAndUpdate(id) 
app.put('/products/:id', (req, res) => {
    let result = Product.findOneAndUpdate(req.params.id);
    if(result) {
        result.price = 310;
        res.send(result);
    }
});
app.listen(port, () =>{
    console.log('listening to the port', port);
});