const express = require('express');
const app = express();
let products = [{
    id: 1,
    name:'pen',
    price:'15'
},
{
    id:2,
    name:'marker',
    price:'25'
},
{
    id:3,
    name:'scale',
    price:'10'
}
];

app.get('/products', (req, res) => {
    res.send(products);
});

app.listen(4000, function() {
    console.log("listening to port 4000");
});
