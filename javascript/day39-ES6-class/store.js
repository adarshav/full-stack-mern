class Invoice {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    generateBill() {
        return `${this.name} ${this.price} ${this.quantity} ${this.price * this.quantity}`;
    }
}
var i1 = new Invoice('marker', 10, 3);
console.log(i1.generateBill());