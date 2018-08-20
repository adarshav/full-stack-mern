function find(names) {
    let result = names.find((name) => {
        return name === 'veeresh';
    });
    if(result) {
        return 'it is found';
    } else {
        return 'it is not found';
    }
}
var  names = ['ramesh', 'suresh', 'jaggesh', 'veeresh'];
console.log(find(names));
