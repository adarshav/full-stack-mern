const axios = require('axios');
//properties - name, department, priority, message
//methods - instance- save, reset
//        - static - findAll(), findByCode(), findByPriority
const { argv } = require('yargs')
console.log(argv);
class Ticket {
    constructor(params) {
        this.name = params.name;
        this.department = params.department;
        this.priority = params.priority;
        this.message = params.message;
    }
    save() {
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=bdf700508f5c5153', this)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    //  reset() {
    //     this.name = '';
    //     this.department = '';
    //     this.priority= '';
    //     this.message = '';
    // }
    static findAll() {
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=bdf700508f5c5153')
        .then((response) => {
            let tickets = response.data;

            tickets.forEach(function(ticket) {
                console.log(`${ticket.ticket_code} - ${ticket.name} - ${ticket.department} - ${ticket.priority} - ${ticket.status}`);
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    static findByCode(code) {
        let temp = code;
        console.log(temp);
        axios.get(`http://dct-api-data.herokuapp.com/tickets/${code}?api_key=bdf700508f5c5153`)
        .then((response) => {
            let ticket = response.data;
            console.log(ticket);
        })
    }
    static findByPriority(priority) {
        let temp1 = priority;
        console.log(temp1);
        axios.get(`http://dct-api-data.herokuapp.com/tickets?priority=${priority}&api_key=bdf700508f5c5153`)
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function() {

        })
        
    }
    static findOneAndUpdate(code, params) {
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${code}?api_key=bdf700508f5c5153`, params)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log('error');
        })
    }
    static findOneAndRemove(code) {
        axios.delete(`http://dct-api-data.herokuapp.com/tickets/${code}?api_key=bdf700508f5c5153`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}


module.exports = {
    Ticket
}