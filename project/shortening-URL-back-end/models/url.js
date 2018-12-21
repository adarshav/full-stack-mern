const mongoose = require('mongoose');
const shortHash = require('short-hash');

const Schema = mongoose.Schema;

const urlSchema = new Schema({
//     Id
// b. Title
// c. Original URL
// d. Tags
// e. Hashed URL
// f. Created at

    "title":{
        type:String,
        required:true
    },
    "originalUrl":{
        type:String,
        required:true
    },
    "tags":{
        type:[String],
        required:true
    },
    "hashedUrl":{
        type:String
    }
});

urlSchema.pre('save', function() {
    this.hashedUrl = hash.unique(this.originalUrl);
});

const Shorturl = mongoose.model("shorturl",urlSchema);

module.exports = Shorturl;