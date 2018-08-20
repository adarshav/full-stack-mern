var n1 = 100;
function func1() {
    var n2 = 200;
    console.log(n1);
    var n2 = 200;
    function func2() {
        console.log(n1);
        console.log(n2);//it will also be not executed
        var n3 = 300;
        func2();
    }
    
}
func1();
//console.log(n2);//it will not be executed because it is declared outside the function