function authenticate(passwords, str) {
    for(let i = 0; i < passwords.length ;i++) {
        if(passwords[i] === str) {
            console.log(passwords[i]);
            //return 'authenticated'
        } else {
            console.log(passwords[i]);
            return 'not authenticated';
        }
    }
        return 'welcome to muyworld';
    }
    const passwords = ['hi', 'qwerty','asdefg'];
    const str = 'qwerty';
console.log(authenticate(passwords, str));
//console.log(passwords.length);
const passwords = ['qwerty', 'what is ur problem', 'asdefg'];
