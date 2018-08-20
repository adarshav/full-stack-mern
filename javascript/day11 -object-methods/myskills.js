var order = {
    name:'Ani',
    skills:['js', 'rb', 'py'],
    myskills:function() {
        this.skills.forEach(function(skill) {
            return `${order.name} knows ${skill}`;
        });
    }
}
console.log(order.myskills());