const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    "name": {
        "type":String,
        required:true,
        validate:{
            validators:function(value) {
                nameFormat = /^[a-zA-Z ]*$/;
                return nameFormat.test(value);
            },
            message:function(props) {
                return 'Invalid name format'
            }
        }
    },
        "department":{
            "type":String,
            enum:['Technical', 'Sales', 'Hr'],
            "required":true
        },
    "priority": {
        "type":String,
        "enum":['High', 'Medium', 'Low'],
        "required":true
    },
    "message": {
        "type":String,
        "required":true,
        "minlength":5
    },
    "status": {
        "type":String,
        "default":'open'
    }
})

employeeSchema.statics.findByStatus = function(status) {
    return this.find({status: status});
}


const Ticket = mongoose.model('ticket', ticketSchema);
module.exports = {
    Ticket
}