class Fake {
	constructor(number) {
		this.number = number;
		this.n1 = '';

	}
	binary() {
		let result = this.number.split('');
		//console.log(result);
		result.forEach((value) => {
			if(value < 5) {
				this.n1 = this.n1 + 0;
			} else {
				this.n1 = this.n1 + 1;
			}
		});
		return this.n1;
		
	}
}

let n1 = new Fake('33457');
console.log(n1.binary());