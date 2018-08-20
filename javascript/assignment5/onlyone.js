function oneElementOut(a,b,c){
    if(a === true && b === false && c === false) {
           return true;
       } else if(a === false && b === true && c === false)  {
               return true;
       } else if(a === false && b === false && c === true) {
                           return true;
           } else {
               return false;
           }
   }