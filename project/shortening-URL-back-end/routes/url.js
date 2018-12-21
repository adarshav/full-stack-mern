const express = require('express');
const shortHash = require('short-hash');

const router = express.Router();
const _ = require('lodash');

const Shorturl = require('../models/url');
const mongoose = require('../config/db');


router.post('/', (req ,res) => {
    let body = _.pick(req.body, ['title', 'originalUrl', 'tags']);
    let url = new Shorturl(body);
    url.save().then((short) => {
        res.send(short);
    }).catch((err) => {
        res.send(err);
    });
});
router.get('/', (req ,res) => {
   Shorturl.find().then((url) => {
       res.send(url);
   }).catch((err) => {
       res.send(err);
   });
});

router.delete('/:id', (req ,res) => {
    
})

module.exports = router;

