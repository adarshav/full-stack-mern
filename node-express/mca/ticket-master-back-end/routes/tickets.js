const express = require('express');
const _ = require('lodash');
const {Ticket} = require('../models/ticket');
const router = express.Router();
const {ObjectId} = require('mongodb');

//mongo
//list all tickets
//this meaning is /tickets
router.get('/', (req, res) => {
    Ticket.find().then((tickets) => {
        res.send(tickets);
    }).catch((err) => {
        res.send(err);
    })
});

//create
//this meaning is /tickets
router.post('/', (req, res) => {
    let body = _.pick(req.body, ['name', 'department', 'priority', 'message']);
    let ticket = new Ticket(body);
    ticket.save().then((ticket) => {
        res.send(ticket);
    })
    .catch((err) => {
        res.send(err);
    })
})

//findOne
//this meaning is /tickets/:id
router.get('/:id', (req, res) => {
    let id = req.params.id;
    //using mongodb package to handle the different id's
    if(!ObjectId.isValid(id)) {
        res.send({
            "notice":"invalid object id"
        });
    }

    Ticket.findById(id).then((ticket) => {
        if(ticket) {
            res.send(ticket);
        } else{
            res.status(404).send({
                "notice":'ticket not found'
            });
        }
        
    }).catch((err) => {
        res.send(err);
    })
});

//update
//this meaning is /tickets/:id
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'department', 'priority', 'message']);

    if(!ObjectId.isValid(id)) {
        res.send({
            "notice":"invalid id"
        });
        return false;
    }

    Ticket.findByIdAndUpdate(id, { $set:body}, {new:true})
    .then((ticket) => {
        res.send({
            ticket, 
            "notice":"successfully updated the ticket"
        });
    }).catch((err) => {
        res.send(err);
    })

});
//delete
router.delete('/tickets/:id', (req, res) => {
    let id = req.params.id;
    //this is also from mongodb package 
    if(!ObjectId.isValid(id)) {
        res.send({
            "notice":"invalid object id"
        });
        return false;//we cannot send multiple res.send so this is used
    }

    Ticket.findByIdAndRemove(id).then((ticket) => {
        if(ticket) {
            res.send({
                ticket,
                "notice":'successfully removed the record'
            });
        } else {
            res.status(404).send({
                "notice":"ticket not found"
            })
        }
        
    }).catch((err) => {
        res.send(err);
    })
});
module.exports = {
    router
}