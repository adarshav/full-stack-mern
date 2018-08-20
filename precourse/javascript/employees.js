var employees = [
    {
        name : 'mallikarjun',
        department:'sales'
    },

    {
        name:'yeshwanth',
        department:'hr'
    },
    {
        name:'santosh',
        department:'sales'
    },
    {
        name:'buddha',
        department:'hr'
    }
]
//for loop
for(var i= 0;i < employees.length;i++) {
    if(employees[i].department === 'sales') {
        console.log(employees[i].name);
    }
   /* else {
        return 'go to hell';
    }*/
    
}