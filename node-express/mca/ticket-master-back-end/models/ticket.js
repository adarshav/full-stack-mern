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
    },
    "code":{
        type:String
    },
    //mapping from one document to another document via another document's Id
    "employee":{
        type:Schema.Types.ObjectId,
        ref:'employee'
    }
})

employeeSchema.statics.findByStatus = function(status) {
    return this.find({status: status});
}
//'pre' is used to generate the code before it is saving, 'slice' is used to slice the 24numbers in 'id', it will display only the last 12characters 
ticketSchema.pre('save', function() {
    this.code = `DCT-${this._id.toString().slice(12)}`;
});

const Ticket = mongoose.model('ticket', ticketSchema);
module.exports = {
    Ticket
}