function objectifier(a){
    var myObj = {};
   for(var i = 0; i < a.length; i++) {
       var result = a[i][0];
       myObj[result] = {};
       var values = a[i][1];
       for(var j = 0; j < values.length; j++) {
               if(j % 2 === 0) {
                   myObj[result][values[j]] = values[j+1];
           }
       }
   }
   return myObj
}