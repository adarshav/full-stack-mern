function Task(title, isCompleted) {
    this.title = title;
    this.created = new Date();
    this.isCompleted = isCompleted;
    this.details = function() {
        return `${this.title} - ${this.created} - ${this.isCompleted}`;
    }
    this.markAsComplete = function() {
        this.isCompleted = true;
        return `the task has been marked as complete`;
    }
    this.markAsInComplete = function() {
         this.isCompleted = false;
         return 'the task has been marked as incomplete';
    }
}
var tasks = [];
var t1 = new Task('get Out', false);
// console.log(t1.details());
// console.log(t1.markAsComplete());
// console.log(t1.details());
// console.log(t1.markAsInComplete());
// console.log(t1.details());
var t2 = new Task('Aham Brahmasmi', true);
var t3 = new Task('Tattvamasi', false);
var t4 = new Task('Uttishta', true);
tasks.push(t1, t2, t3, t4);
//console.log(task);
var completedTasks = tasks.filter(function(task) {
    return task.isCompleted;
})

var inCompletedTasks = tasks.filter(function(task) {
    return !task.isCompleted;
})
console.log('completed tasks');
completedTasks.forEach(function(task) {
    console.log(task.details());
});
console.log('incompleted tasks');
inCompletedTasks.forEach(function(task) {
    console.log(task.details());
});


