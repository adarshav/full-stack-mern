const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema ({
    "name":{
        type:String,
        required:true,
        validate:{
            validator:function(value) {
                nameFormat = /^[a-zA-Z ]*$/;
                return nameFormat.test(value);
            },
            message:function(props) {
                return 'Invalid ${props.path} format'
            }
        }
    },
    "email":{
        type:String,
        required:true,
        validate:{
            validator:function(value) {
                let emailFormat = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
                return emailFormat.test(value);
            },
            message:function(props) {
                return 'Invalid email format'
            }
        }
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
        maxlength:60,
        validate:{
            validator:function(value) {
                return (value >= 30 && this.salary < 20000) ? false: true;
            },
            message:function(props) {
                return "OOps salary such a low "
            }
        }
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
//defining static and instance methods in mongoose
employeeSchema.statics.findByPriority = function(priority){
    return this.find({priority: priority});
}

employeeSchema.statics.findByStatus = function(status) {
    return this.find({status: status});
}

employeeSchema.methods.shortInfo = function() {
    return {
        _id:this._id,
        name:this.name,
        department:this.department,
        email:this.email
    }
}

const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;