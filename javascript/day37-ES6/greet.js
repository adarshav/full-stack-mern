function hello() {
    return 'hello'
}
function goodAfternoon() {
    return 'goodAfternoon'
}
function goodEvening() {
    return 'goodevening';
}
 
let description = 'iam a greeter function';
module.exports = {
    hello,
    goodAfternoon,
    description,
    goodEvening
}