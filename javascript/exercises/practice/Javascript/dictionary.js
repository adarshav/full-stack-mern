class Dictionary {
    constructor() {
        this.data = [];
    }
    newEntry(name, description) {
        this.data.push({name, description});
        return this.data;
    }
    look(element) {
        let result = this.data.find((value) => {
            return value.name == element; 
        })
        if(result) {
            return result.description;
        } else {
            return 'result not found';
        }
    }
}
let d = new Dictionary();
// d.newEntry("apple", "A fruit called apple");
// console.log(d.look("apple"));
d.newEntry("banana", "a fruit called banana");
console.log(d.look("banana"));

