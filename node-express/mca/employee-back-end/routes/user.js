const express = require('express');
const User = require('../models/user');
const router = express.Router();
const _ = require('lodash');

router.post('/', (req, res) => {
    let body = _.pick(req.body, ['username', 'password', 'email']);
    let user = new User(body);
    user.save().then((user) => {
        res.send(user);
    }).catch((err) => {
        console.log(err);
    })
})
router.get('/', (req, res) => {
    res.send();
})
module.exports = router;