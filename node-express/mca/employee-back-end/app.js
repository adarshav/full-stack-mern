const express = require('express');
const mongoose = require('./config/db');
const {ObjectId} = require('mongodb');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Employee = require('./models/employee');

const port = 3000;

app.use((req, res ,next) => {
    console.log(`${req.method} | ${req.url} | ${req.ip} | ${new Date}`);
    next();
});

app.get('/', (req, res) => {
    res.send({
        notice:"you are under the surviellance now"
    });
});

//mongo
app.get('/employees', (req ,res) => {
    Employee.find().then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/employees/:id', (req ,res) => {
    let id = req.params.id;
    Employee.findById(id).then((emp) => {
        res.send(emp);
    })
});

app.put('/employees/:id', (req ,res) => {
    let body = req.body;
    let id = req.params.id;
    Employee.findByIdAndUpdate(id, {$set:body}, {new:true})
    .then((emp) => {
        res.send({
            emp,
            notice:"succcessfully updated"
        })
    })
    .catch((err) => {
        res.send(err);
    })
})

app.delete('/employees/:id', (req ,res) => {
    let id = req.params.id;
    Employee.findByIdAndRemove(id).then((emp) => {
        res.send({
            emp,
            notice:"successfully deleted"
        });
    })
})

app.post('/employees', (req, res) => {
    let body = req.body;
    let employee = new Employee(body);
    employee.save().then((emp) => {
        res.send(emp);
    })
    .catch((err) => {
        res.send(err);
    })
});

app.listen(port, () => {
    console.log("listening to the port", port);
});