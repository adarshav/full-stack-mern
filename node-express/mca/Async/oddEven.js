let printEven = function(n) {
    console.log('inside even function');
    console.log(n);
}

let printOdd = function(n) {
    console.log("inside odd function");
    console.log(n);
}

function displayNumber(printEven, printOdd) {
    let random = Math.round(Math.random() *1);
    if(random % 2 == 0) {
        printEven(random);
    } else {
        printOdd(random);
    }
}

displayNumber(printEven, printOdd);//here printEven & printOdd is a function, callBack function to use everytime whenever we want

function displayUsers(users) {
    for(let user of users) {
        console.log(user);
    }
}

function fetchUsers(displayUsers) {
    setTimeout(() => {
        let users = ["u1", "u2", "u3"];
        diplayUsers(users);
    }, 2000);
}
fetchUsers(displayUsers);