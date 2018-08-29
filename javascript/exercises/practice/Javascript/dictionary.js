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
        if(result == undefined) {
            return 'result not found';
        } else {
            return result;
        }
    }
}
let d = new Dictionary();
d.newEntry("apple", "A fruit called apple");
console.log(d.look("apple"));
console.log(d.look("banana"));
