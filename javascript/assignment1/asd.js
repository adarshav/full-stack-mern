
	/*for(var i = 0;i < array.length;i++) {
				if(i == array.length - 1) {
					console.log(i);
					//array[i +1] ==element;
					//return array;
				}
		}
	return [array ,+(element)];
}*/

function iPush(array, element) {
		array[array.length] = element;
		return array;
}
let array =  [1, 2, 4];
let element = 5;
console.log(iPush(array, element));