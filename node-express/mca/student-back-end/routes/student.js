const express = require('express');
const _ = require('lodash');
const router = express.Router();

const mongoose = require('../config/db');
const Student = require('../models/student');

router.post('/', (req, res) => {
    let body = _.pick(req.body, ['name', "phone", "email", "education"]);
    let student = new Student(body);
    Student.save().then((stud) => {
        res.send(stud);
    }).catch((err) => {
        res.send(err);
    });
});
module.exports = router;