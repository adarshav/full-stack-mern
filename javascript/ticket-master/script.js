//console.log('script loaded');
var baseUrl = 'http://dct-api-data.herokuapp.com';
var key = "bdf700508f5c5153";//bdf700508f5c5153

var countHandle =document.getElementById('count');
//var tbodyHandle = document.getElementById('tableBody');
var ticketFormHandle = document.getElementById('ticketForm');

var nameHandle = document.getElementById('name');
var nameErrorHandle = document.getElementById('nameError');

var departmentHandle = document.getElementById('department');
var priorityHandle = document.getElementById('priority');
var priorityNames = document.getElementsByName('priority');
var messageHandle = document.getElementById('message');
var tableBodyHandle = document.getElementById('tableBody'); 

var hasErrors = {
    name:true,
    department:true,
    priority:true,
    message:true
};

function buildRow(ticket){
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

function validateName() {
    if(nameHandle.value == '') {
        nameErrorHandle.innerHTML = 'name cannot be blank';
        hasErrors.name = true;
    } else {
        nameErrorHandle.innerHTML = '';
        hasErrors.name = false;
    }
}

axios.get(`${baseUrl}/tickets?api_key=${key}`)
.then(function(response){
    var tickets = response.data; 
    countHandle.innerHTML = tickets.length; 
    tickets.forEach(function(ticket){
        buildRow(ticket); 
    })
})
.catch(function(err){

})

function getPriorityValue(){
    for(var i = 0; i < priorityNames.length; i++) {
        if(priorityNames[i].checked){
            return priorityNames[i].value; 
        }
    }
}

ticketFormHandle.addEventListener('submit', function(e){
    
    validateName();
    e.preventDefault(); 
    var formData = {
        name: nameHandle.value,
        department: departmentHandle.value,
        priority: getPriorityValue(),
        message: messageHandle.value 
    }; 

    axios.post(`${baseUrl}/tickets?api_key=${key}`, formData)
    .then(function(response){
        var ticket = response.data; 
        buildRow(ticket); 
        countHandle.innerHTML = parseInt(countHandle.innerHTML) + 1; 
        ticketFormHandle.reset(); 
    })
    .catch(function(err){
        console.log(err); 
    })

    //console.log(formData); 
}, false); 