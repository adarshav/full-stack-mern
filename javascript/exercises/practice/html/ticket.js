var baseUrl = 'http://dct-api-data.herokuapp.com';
var key = 'bdf700508f5c5153';

var formHandle = document.getElementById('ticketForm');

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var priorityHandle = document.getElementById('priority');
var priorityNames = document.getElementsByName('priority');
console.log(priorityNames);
var messageHandle = document.getElementById('message');

function buildRow(ticket) {
    var tr = document.createElement('tr');
    
    tr.innerHTML = `
    <td>${ticket.ticket_code}</td>
    <td>${ticket.name}</td>
    <td>${ticket.department}</td>
    <td>${ticket.priority}</td>
    <td>${ticket.message}</td>
    `;
    tableBodyHandle.appendChild(tr);
}


axios.get(`${baseUrl}/tickets?api_key= ${key}`)
.then(function(response) {
    var tickets = response.data;
    ///console.log(tickets);
    countHandle.innerHTML = tickets.length;
    tickets.forEach(function(ticket) {
        buildRow(ticket);
    })
})
.catch(function(error) {
    console.log(error.data);
})

function getPriorityValue() {
    for(var i = 0;i < priorityNames.length;i++) {
       if(priorityNames[i].checked) {
           return priorityNames[i].value;
       } 
    }
}

formHandle.addEventListener('submit', function(e) {

    e.preventDefault();

    var formData = {
        name:nameHandle.value,
        department:departmentHandle.value,
        priority:getPriorityValue(),
        message:messageHandle.value
    };

    axios.post(`${baseUrl}/tickets?api_key=${key}`, formData)
    .then(function(response) {
        var ticket = response.data;
        buildRow(ticket);
        countHandle.innerHTML = parseInt(countHandle.innerHTML) + 1;
        formHandle.reset();
    })
    .catch(function(error) {
        console.log(error);
    })
    console.log(formData);
}, false);