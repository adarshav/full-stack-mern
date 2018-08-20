var student = {
    name:'adarsha',
    age:21,
    course:'web developement',
    source:'reference',
    email:'asd@gmail.com',
    skills:['ruby', 'js', 'python'],
    education:[
        {
            '12':'2012'
        },
        {
            'degree':'2017'
        },
        {
            'masters':'2020'
        }
    ]
};
console.log('skills', student.skills.join(','));
console.log('does he know node??', student.skills.includes('node'));