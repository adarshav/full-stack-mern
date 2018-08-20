var student1 = {
    name: 'adarsha',
    email:'asd@gmail.com',
    course:'MERN'
};
var student2 = {
    name:'harisha',
    email:'haris@gmail.com',
    course:'MERN'
};
var student3 = {
    name:'ramesh',
    email:'ramesh@gmail.com',
    course:'MERN'
};
var student = [];
student.push(student1, student2, student3);
console.log(student);
//console.log(student[0]);
console.log('---------------------------------');
student.forEach(function(detail) {
console.log(`${detail.name.charAt(0).toUpperCase() + detail.name.slice(1)} | ${detail.email}| ${detail.course}`);
//console.log(detail.name.charAt(0).toUpperCase());
});
console.log('---------------------------------------');
student.forEach((detail) =>{
    console.log(`${detail.name.charAt(0).toUpperCase() + detail.name.slice(1)} |${detail.email} | ${detail.course}`);
});
