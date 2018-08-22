const express = require('express');
const router = express.Router();
const _ = require('lodash');

const {ObjectId} = require('mongodb');
const mongoose = require('../config/db');
const Employee = require('../models/employee');

// this means /employees/
router.get('/', (req ,res) => {
    Employee.find().then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

//this means /employees/:id
router.get('/:id', (req ,res) => {
    let id = req.params.id;
    Employee.findById(id).then((emp) => {
        res.send(emp);
    })
});

//
router.put('/:id', (req ,res) => {
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

router.delete('/:id', (req ,res) => {
    let id = req.params.id;
    Employee.findByIdAndRemove(id).then((emp) => {
        res.send({
            emp,
            notice:"successfully deleted"
        });
    })
})

router.post('/', (req, res) => {
    let body = req.body;
    let employee = new Employee(body);
    employee.save().then((emp) => {
        res.send(emp);
    })
    .catch((err) => {
        res.send(err);
    })
});

module.exports = router;