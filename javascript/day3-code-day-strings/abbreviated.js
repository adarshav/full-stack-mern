function abbreviation(name) {
    var splitName = name.split(' ');
    var result = `${splitName[0]} ${splitName[1].charAt(0)}.`;
    return result;
}
console.log(abbreviation('Robin singh'));
console.log(abbreviation('narayan sad'));
console.log(abbreviation('harbhajan singh'));