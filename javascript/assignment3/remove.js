function removeArrayElements(a,b){
	var array = [];
	var i;
	a.forEach(function(value){
		if(value !== b) {
            return a;
        } else {
             return a.splice(a.indexOf(value), 1);
        }
        
		//array.push(i);
    });
    if(a.length === 0 || a === undefined) {
        return 'invalid input';
    }
	return a;
}
console.log(removeArrayElements([1, 2, 3, 4], 5) )
console.log(removeArrayElements([1, 2, 3, 4], 1) )
console.log(removeArrayElements([], 5) )