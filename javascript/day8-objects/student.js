var student = ['Ravi DL', 'ravidaasari@gmail.com', '9945371612', 'web developement', 'reference'];

var studentNested = [//it can be accessed via two indices ex:studentNested[0][1]:returns ravi
    ['name', 'ravi'],
    ['email', 'ravi@gmail.com'],
    ['mobile', '987654321'],
    ['course', 'web develpement'],
    ['source', 'reference']
];
var studentObj = {
    name:'ravi',
    email:'ravi@gmail.com',
    mobile:'987654321',
    course:'webdevelopement',
    source:'reference',
    skills:['ruby', 'js','python'],
    education:[
        {
            '12': '2012'
        },
        {
            'degree':'2016'
        },
        {
            'masters':'2019'
        }
    ]
};
console.log('skills', studentObj.skills);
console.log('does he know node', studentObj.skills.includes('js'));