function add() {
    let n1 = 20;
    let n2 = 20;
    setTimeout(() => {
        let n3 = 20;
        console.log(n1+n2+n3);
    }, 2000);
}

console.log("im calling the add function");
add();
console.log('im after the called function');