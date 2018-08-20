var student1 = {
    name:'adarsha',
    email:'asd@gmail.com',
    course:'MERN'
};
var student2 = {
    name:'Radha',
    email:'radha@gmail.com',
    course:'MERN'
};
var student3 = {
    name:'Mallikarjun',
    email:'mallika@gmail.com',
    course:'MERN'
};
var student = [];
student.push(student1, student2, student3);
//console.log(student);
student.forEach(function(detail) {
     console.log(`${detail.name.charAt(0).toUpperCase() + detail.name.slice(1)} | ${detail.email} | ${detail.course}`);
});