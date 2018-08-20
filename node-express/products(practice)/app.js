const express = require('express');
const app = express();//[npm  install -g --save express]
const bodyParser = require('body-parser');

app.use(bodyParser.json());//when json data is sent it will be displayed using javascript we can insert into the server

//logger middlerware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.ip}  ${req.url} ${new Date()}`);
    next();
});
//NODEMON is a live server where one need not to kill the server everytime and run it, when the save is done to the file  it automstically restarts the server and run its own and [it is used only during the developement cycle and not in the production cycle]
app.get('/', (req, res) => {
    res.send({
        msg:'welcome to the product catalog'
    });
});


//REST - Representational State Transfer Protocol
//to perform an operation on resource or data we need to go to a unique end point withh a specific http method

//dummy database
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

//READ
//GET - /products
//Route Handlers
//app.GET(ROUTE, HANDLERS);
app.get('/products', (req, res) => {
    //write to get the code from the database
    res.send({
        //msg:'get request made for /products'
        products
    });
});

//GET - /products/:id (show specific product)
app.get('/products/:id', (req, res) => {
    let product = products.find((product) => {
        return product.id == req.params.id;
    });
    if(product) {//if product is found
        res.send(product);
    } else {//if product is not found
        res.send({
            notice:`product with id ${req.params.id} not found`
        });
    }
    
});
//CREATE
//POST - /products
//body-parser should be installed because while we create the record and it will not be updated into the server for that  reason BODY-PARSER should be installed [npm install --save body-parser]
app.post('/products', (req, res) => {
    ///write to insert the data to the database
   console.log(req.body);//this displays the json body which we are  trying to insert into the database
   let product = req.body;
   products.push(product);
   res.send({
       products,
       notice:'successfully created'
   });
});

//UPDATE
//PUT - /products/:id
app.put('/products/:id', (req, res) => {
    //write to find the record and update the record inside the database
   let product = products.find((product) => {
        return product.id == req.params.id;
   }); 
   if(product) {
    product.price = req.body.price;
    res.send({
        product, 
        notice:'successfully updated'
    });
   } else {
       res.send({
           notice:`product with id ${req.params.id} not found`
       });
   }
});
//DESTROY
//DELETE - /products/:id
app.delete('/products/:id', (req, res) => {
    //write the code to find the record and delete from the database
    let p1 = products.findIndex((product) => {//findIndex is used to get the position of the required element in the array or object
        return product.id == req.params.id;
    });
    if(p1 >= 0) {
        products.splice(p1, 1);
    res.send({
        notice:'successfully deleted the record'
    });
    } else {
        res.send({
            notice:`product with id ${req.params.id} not found`
        });
    }
    
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});