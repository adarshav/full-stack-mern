function Product(naame, price) {
    this.name = name;
    this.price = price;
    this.details = function() {
        return `${this.name} - INR ${this.price}`;
    }
}