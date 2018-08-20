class Capitalize {
    constructor(str) {
        this.str = str;
        this.total = [];
    }
    words() {
        let result = this.str.split(' ');
        //console.log(result);
        result.forEach((value) => {
            this.total.push(value[0].toUpperCase() + value.slice(1));
        });
        return this.total.join(' ');
    }
}
let c1 = new Capitalize('js string exercises');
console.log(c1.words());
