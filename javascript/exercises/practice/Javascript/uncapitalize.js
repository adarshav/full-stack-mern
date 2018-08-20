function unCapitalize(name) {
    let splitted = name.split(' ');
    let result = [];
    console.log(splitted);
    for(var i = 0;i < splitted.length;i++) {
        result.push(splitted[i].charAt(0).toLowerCase() + splitted[i].slice(1));
    }
    return result.join(' ');
}
console.log(unCapitalize('Js String Exercises'));