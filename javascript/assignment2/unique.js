function difference(a, b) {
    var newArray = [];
    for(var i = 0;i < a.length;i++) {
        //newArray.push(a[i]);
        if(newArray.indexOf(a[i]) === -1) {
            newArray.push(a[i]);
        }
    }
      for(var j = 0;j < b.length;j++) {
            // newArray.push(b[j]);
            if(newArray.indexOf(b[j]) === -1) {
                    newArray.push(b[j]);
            }
        }
    //         // } else {
    //         //     newArray.push(i);
    //         // }
    //     }
    //     for(var i = 0;i < newArray.length;i++) {

    //     }
     return newArray;
}
console.log(difference([1, 2, 3,4,3,2], [4, 2, 100]));