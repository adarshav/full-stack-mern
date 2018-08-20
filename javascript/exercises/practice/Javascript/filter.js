var values = ['dct', 'academy', 56001, 'bangalore', 430];

function isString(values) {
    let result = values.filter((value) => {//filter return type is array
        return typeof value === 'string';
    });
    return result;
}
var values = ['dct', 'academy', 56001, 'bangalore', 430];

console.log(isString(values));
