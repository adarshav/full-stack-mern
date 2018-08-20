function clearArray(a){
    //type js code here
       if(a.length == 0) {
                return 'invalid input';
            }
       var result = [];
       a.forEach(function(value) {
       if(value) {
            result.push(value);
            }	
       });
       return result;
   }
   console.log(clearArray(a));//it depends upon truthy values and falsy values