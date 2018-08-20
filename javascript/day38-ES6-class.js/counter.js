class Counter {
    constructor(value) {
        this.value = 0;
    }
    up() {
        this.value++;
        return this.value;
    }
    down() {
        this.value--;
        if(this.value < 0) {
            return this.value = 0;
        }
        return this.value;
    }
    reset() {
        this.value = 0;
        return this.value;
    }
    get() {
        return this.value;
    }
}
module.exports ={
    Counter
}

