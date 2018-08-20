const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema ({
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "department":{
        type:String,
        enum:['Technical', 'Sales', 'Hr'],
        required:true
    },
    "salary":{
        type:Number,
        required:true
    },
    
    "ageWhileJoining":{
        type:Number,
        required:true,
        minlength:18,
        maxlength:60
    }
})

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;