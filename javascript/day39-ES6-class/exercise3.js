/*3. Your job is to create a class Dictionary which you can add words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Cant find entry for Banana
*/
class Dictionary {
    constructor() {
        this.data = [];
    }
    newEntry(name, description) {
        this.data.push({name, description});
        return this.data;
    }
    look(element) {
        var result = this.data.find(function(value) {
            return value.name == element;
        });
        if(result == undefined) {
            return 'not found';
        } else {
            return result;
        }
    }
}
var c1 = new Dictionary();
console.log(c1.newEntry('Apple', 'Good'));
console.log(c1.look('Apple'));
