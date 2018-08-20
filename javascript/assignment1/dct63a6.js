function findNotBookedTables(array) {
	let tableNumber =[];
	for(let i = 0;i < array.length;i++) {
		
		if(array[i] == 'not booked') {
				tableNumber.push(i);
			//var 'index' + array[i] = i; 
			//console.log(tableNumber);
		}
	}
	return tableNumber;
}
const array = ['booked', 'not booked', 'booked', 'not booked'];
console.log(findNotBookedTables(array));
//not getting the value of i and its getting only the last value