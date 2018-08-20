function doubleCola(double) {
        var double = ['sheldon', 'leonard', 'penny','rajesh', 'howard'];
        var r = 2;
        var temp;
        for(var i = 0;i < r;i++) {
             temp = double.shift();
             console.log(temp);
             double.push(temp, temp);
            //console.log(double);
    }
    //return double[0];
}

console.log(doubleCola());