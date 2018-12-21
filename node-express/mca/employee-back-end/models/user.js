const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 64
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value);
            },
            message: function(){
                return 'Invalid email format'
            }
        }
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});

userSchema.pre('save', function(next){
    let user = this;
    bcrypt.genSalt(10).then((salt) => {
        bcrypt.hash(user.password, salt).then((encryptedPassword) => {
            user.password = encryptedPassword;
            next();
        });
    })
});

userSchema.methods.generateToken = function() {
    let user = this;
    
    let tokenData = {
        'id': user._id
    };

    let token = jwt.sign(tokenData, 'supersecret');

    user.tokens.push({
        token
    });

    return user.save().then((user) => {
        return token;
    });
}

userSchema.methods.toJSON = function(){
    return _.pick(this, ['_id', 'username', 'email']);
}

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}