let bankCustomer = {
    "name":'Adarsha',
    "accountNumber":123456,
    "balance":10000,
    "transaction":function(amount, code) {//code will be 0-withdrawal;1-deposit
        if(code == 0) {
            if(amount < this.balance) {
                this.balance = this.balance - amount;
                return `${amount} has been withdrawn`;
            } else {
                return 'necessary balance is not available';
            }
        }
        if(code == 1) {
            this.balance = this.balance + amount;
            return `${amount} has been deposited into your account`;
        }
    },
    currentBalance:function() {
        return `Respected Customer ${this.name} your balance is ${this.balance}`;
    }
}
console.log(bankCustomer.transaction(3000, 1));//3000 has been deposited into your account
console.log(bankCustomer.currentBalance());//Respected Customer Adarsha your balance is 13000
console.log(bankCustomer.transaction(5000, 0));//5000 has been withdrawn
console.log(bankCustomer.currentBalance());//Respected Customer Adarsha your balance is 8000


