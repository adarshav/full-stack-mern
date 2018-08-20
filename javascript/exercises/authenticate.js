function authenticate(passwords, str) {
    for(var i = 0;i < passwords.length;i++) {
        var keys = (passwords[i] === str)?'authenticated' : 'notauthenticated';
    }
    return keys;
}
var passwords = ['password', 'secret', 'protocol', 'super'];
console.log(authenticate(passwords, 'balrog'));
console.log(authenticate(passwords, 'secret'));
