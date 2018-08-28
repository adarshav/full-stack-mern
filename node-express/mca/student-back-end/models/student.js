const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "phone":{
        type:String,
        required:true
    },
    "education":[
        {
            eduType:{
                required:true,
                type:String
            },
            yearOfPassing:{
                required:true,
                type:Number
            },
            percentage:{
                required:true,
                type:Number
            }
        }
    ]
})

const Student = mongoose.model("student", studentSchema);

module.exports = Student;