
const {Ticket} = require('./ticket');
let ticket = new Ticket({
    name:'Roopesh',
    department:'Hr',
    priority:'Medium',
    message:'what is going'
});
let ticket1 = new Ticket({
    name:'vignesh',
    department:'Sales',
    priority:'Low',
    message:'byeee'
});
//ticket1.save();
// console.log(ticket);
//ticket.save();

//Ticket.findAll();

//ticket.reset();

//Ticket.findByCode('DCT-bc0f');

// Ticket.findOneAndUpdate('DCT-fa5a', {//updated record will be displayed
//     status:'completed',
//     priority:'Medium'
// });

//Ticket.findOneAndRemove('DCT-fa5a')//{ notice: 'Successfully removed the ticket' } 
//Ticket.findByPriority('Low');