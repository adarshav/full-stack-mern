function abbreviation(name) {
    let splitted = name.split(' ');
    let result = '';
    return `${splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1)} ${splitted[1].slice(0, 1)}`;
}   
console.log(abbreviation('robin singh'));