function unique(a) {
    var x;
    for(var i = 0;i < a.length;i++) {
        var count = 0;
        for(var j = 0;j < a.length;j++) {
            if(a[i] == a[j]) {
                count++;
            } 
        }
        if(count == 1) {
            x = a[i];
        }
    }
    return x;

}
console.log(unique([ 1, 8, 4, 4, 6, 1, 8 ]));