var product = {
    name:'Marker',
    price:'INR 15',
    description:'white board marker',
    details:function() {
        return `${this.name} - ${this.price} - ${this.description}`;
    }
}
console.log(product.details());//Marker - INR 15 - white board marker (output)