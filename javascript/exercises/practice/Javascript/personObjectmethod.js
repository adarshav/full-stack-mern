let student = {
    "name":"Adarsha",
    "city":'Bangalore',
    "college":"PESU",
    "education":"M.C.A",
    sayName:function() {//when a property holds function as its value,then such property is called methhod
        return `My name is ${this.name}`;
    },
    whichCity:function() {
        return `Iam in ${this.city} city`;
    },
    myEducation:function(){
        return `Iam currently pursuing in ${this.education}, ${this.college}`;
    }
}
console.log(student);
console.log(student.sayName());
console.log(student.whichCity());
console.log(student.myEducation());
//Product Object
let product = {
    "name":"FitBit",
    "price":14000,
    "description":"Know how much calorie you burn daily",
    "details":function() {
        return `Product:${this.name}\n INR-${this.price}\n Description- ${this.description}`;
    }
}
console.log('-------------------------------------------------------');
console.log(product);
console.log(product.details());
