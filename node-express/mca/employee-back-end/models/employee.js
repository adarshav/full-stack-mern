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
    },
    "skills":[String],
    "luckyNumbers":[Number],
    "education":[{
            eduType:{
                type:String,
                enum:['10th', '12th', 'UG', 'PG'],
                required:true
            },
                yearOfPassing:{
                    type:Number,
                    required:true
                }
            }
        ],
    "projects":[
        {
            title:{
                type:String,
                required:true
            },
            details:{
                required:true,
                type:String
            }
        }
    ],
    "address":[
        {
            street:{
                type:String,
                required:true
            },
            state:{
                type:String,
                required:true
            }
        }
    ]
})

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;