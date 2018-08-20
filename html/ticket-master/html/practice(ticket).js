var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var formHandle = document.getElementById('ticketForm');
var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var priorityHandle = document.getElementById('priority');
var priorityNames = document.getElementsByName('priority');
var messageHandle = document.getElementById('message');
// var allHandle = document.getElementById('all');
// var highHandle = document.getElementById('highselect');
// var mediumHandle = document.getElementById('mediumselect');
// var lowHandle = document.getElementById('lowselect');
var searchHandle = document.getElementById('search');
var all = document.getElementById('all');
var high = document.getElementById('high');
var medium = document.getElementById('medium');
var low = document.getElementById('low');
var selectHandle = document.getElementById('select');
var showHandle = document.getElementById('show');

var alertHandle = document.getElementById('alert');

var progressHandle = document.getElementById('progress');
var progressCount = 0;

var chartHandle = document.getElementById('container');

let salesOpenCount, salesCloseCount, technicalOpenCount, technicalCloseCount, HROpenCount, HRCloseCount;
var tickets;

function buildRow(ticket) {
    var tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${idCount++}</td>
        <td>${ticket.ticket_code}</td>
        <td>${ticket.name}</td>
        <td>${ticket.department}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.message}</td>
        <td><input type="checkbox" id=${ticket.ticket_code} onClick="clickMe(this)"></td>
        `;
    tableBodyHandle.appendChild(tr);
}

var url = "http://dct-api-data.herokuapp.com/tickets?api_key=bdf700508f5c5153";
var showCount;
function getTickets() {
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=bdf700508f5c5153')
    .then(function(response) {
     tickets = response.data;
     console.log(1, tickets);
     showCount = tickets.length;
     //console.log(showCount);
    countHandle.innerHTML = tickets.length;
    tickets.forEach(function(ticket) {
        buildRow(ticket);
    });
   //console.log(2, tickets);
})
.catch(function(error) {
    console.log(error);
})
   //console.log(2, tickets);

//console.log(tickets);
}
var id;//this id is for (evtid)
//console.log(tickets);
//var percentage = (progressCount/tickets.length) * 100;
//console.log(tickets.length);


function clickMe(evt) {
    
//console.log(evt.checked);
    if(evt.checked) {
         id = evt.id;
        
         //console.log(progressCount);
        console.log(`http://dct-api-data.herokuapp.com/tickets/${id}?api_key=bdf700508f5c5153`);
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${id}?api_key=bdf700508f5c5153`, {
        "status":"completed"
        })
        .then(function(response) {
        console.log(response.data);
        
        })
        .catch()

        progressCount++;
        percentage = (progressCount/showCount) * 100;
        progressHandle.setAttribute("style", `width:${percentage}%`);//it is done because it should update
        console.log(percentage);
         console.log(progressCount);

    } else {
            
            //console.log(progressCount);

            progressCount--;
            console.log(progressCount);

        percentage = (progressCount/showCount) * 100;
        progressHandle.setAttribute("style", `width:${percentage}%`);//same as here from the above
            axios.put(`http://dct-api-data.herokuapp.com/tickets/${id}?api_key=bdf700508f5c5153`, { 
            "status":"open"
        })
        .then(function(response) {
        console.log(response.data);
        
        })
        .catch(function(error) {
        console.log(error);
        })

    }
}




window.addEventListener('load', function() {
    getTickets();
    buildChart();
    //chartCount();
}, false);

function getPriorityValue() {
    for(var i = 0;i < priorityNames.length;i++) {
        if(priorityNames[i].checked) {
            return priorityNames[i].value;
        }
    }
}

function filterTickets(priority) {
    tableBodyHandle.innerHTML = '';
    var count = 0;
    tickets.forEach(function(ticket) {
        if(ticket.priority === priority) {
            count++;
            buildRow(ticket);

        }
    });
    countHandle.innerHTML = count;
}
var idCount = 1;//initialise idCount to 1for Slno
searchHandle.addEventListener('keyup', function() {
    tableBodyHandle.innerHTML = '';
    idCount = 1;
    var searchResults = tickets.filter(function(ticket) {//it searchs on the code, name, department, priority
        // return ticket.ticket_code.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0;
        return ticket.name.toLowerCase().includes(searchHandle.value.toLowerCase()) || 
        ticket.ticket_code.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0 ||
        ticket.department.toLowerCase().includes(searchHandle.value.toLowerCase()) ||
        ticket.priority.toLowerCase().includes(searchHandle.value.toLowerCase());
    });
    searchResults.forEach(function(ticket) {
        buildRow(ticket);
    });
    countHandle.innerHTML = searchResults.length;
    //code for "showing results out of the total"
    showHandle.innerHTML = '';//it is because when the keyup is done it would show the previous results so this is done
    var text1 = document.createTextNode(`showing ${searchResults.length} results out of ${tickets.length}`);
    showHandle.appendChild(text1);
    if(searchHandle.value === '') {
        showHandle.innerHTML = '';
    }
}, false);

// high.addEventListener('click', function() {
//     filterTickets('high');
// }, false);

// medium.addEventListener('click', function() {
//     filterTickets('medium');
// }, false);
// low.addEventListener('click', function() {
//     filterTickets('low');
// }, false);
// all.addEventListener('click', function() {
//     getTickets();
// }, false);

selectHandle.addEventListener('change', function() {
    if(selectHandle.value === 'high') {
        filterTickets('high');
    } else if(selectHandle.value === 'medium') {
        filterTickets('medium');
    } else if(selectHandle.value === 'low') {
        filterTickets('low');
    } else {
        getTickets();
    }
}, false);



formHandle.addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = {
        name:nameHandle.value,
        department:departmentHandle.value,
        priority:getPriorityValue(),
        message:messageHandle.value
    }

    axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=bdf700508f5c5153', formData)
    .then(function(response) {
        var ticket = response.data;
        console.log(ticket);
        buildRow(ticket);
        countHandle.innerHTML = parseInt(countHandle.innerHTML) + 1;
        formHandle.reset();
        alertHandle.innerHTML = '<div class="alert alert-primary" role="alert">Added successfully</div>'//this is added via bootstrap for the effectiveness
        setTimeout(function() {
            alertHandle.innerHTML = '';
        }, 3000);

    })
    .catch(function(error) {
        console.log(error);
    })
}, false);
//chart
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=bdf700508f5c5153')
.then(function(response) {
    var details = response.data;
    console.log('d', details);
    var salesOpen = details.filter(function(detail) {
        return detail.department === 'sales' && detail.status === 'open';
    });
    salesOpenCount = salesOpen.length;
    //console.log('s', salesOpenCount);
    var salesClose = details.filter(function(detail) {
        return detail.department === 'sales' && detail.status === 'completed';
    });
    salesCloseCount = salesClose.length;
    //console.log('sc', salesCloseCount);
    var technicalOpen = details.filter(function(detail) {
        return detail.department === 'technical' && detail.status === 'open';
    });
    technicalOpenCount = technicalOpen.length;
    //console.log('to', technicalOpenCount);
    var technicalClose = details.filter(function(detail) {
        return detail.department === 'technical' && detail.status === 'completed';
    });
    technicalCloseCount = technicalClose.length;
    //console.log('tc', technicalCloseCount);
    var HROpen = details.filter(function(detail) {
        return detail.department === 'hr' && detail.status === 'open';
    });
    HROpenCount = HROpen.length;
    //console.log('hro', HROpenCount);
    var HRClose = details.filter(function(detail) {
        return detail.department === 'hr' && detail.status === 'completed';
    });
    HRCloseCount = HRClose.length;
    console.log('hrc', HRCloseCount);

}) 

.catch()



//highcharts 
function buildChart() {
    console.log(12, salesCloseCount);
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Tickets By Department'
        },
        xAxis: {
            categories: ['Sales', 'Technical', 'HR']
        },
        yAxis: {
            title: {
                text: 'Status'
            }
        },
        series: [{
            name: 'open',
            data: [1, technicalOpenCount, HROpenCount]
        }, {
            name: 'Completed',
            data: [salesCloseCount, technicalCloseCount, HRCloseCount]
        }]
    });
}



// function filterTickets(priority) {
//     tableBodyHandle.innerHTML = '';
//     var count;
//     tickets.forEach(function(ticket) {
//         if(ticket.priority === priority) {
//             count++;
//             buildRow(ticket);
//         }
//     });
//     countHandle.innerHTML = count;
// }
