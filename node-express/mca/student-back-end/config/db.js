const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect = ('mongodb://localhost:27017//mcastudent', {
    UseNewUrlParser:true});

module.exports = mongoose;  