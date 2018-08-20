var bankCustomer = {
    acccountNumber:'1234567',
    name:'adarsha',
    balance:32456,
    transaction:function(amount, code) {//code - 1 for deposit 0 - withdrawal
        if(code === 0) {
            //var result = this.balance - amount;
            if(amount < this.balance) {
                this.balance = this.balance - amount;
            return `the amount ${amount} has been withdrawn`;
            } else {
                return 'the balance is innsufficient for specifie withdrawal'
            }
        }
        if(code === 1){
            this.balance = this.balance + amount;
            return `amount ${amount} has been deposited`;
        }
    },
    currentBalance:function() {
        return `Dear Customer, ${this.name} your balance is ${this.balance}`;
    }
}
//console.log(bankCustomer.currentBalance());
console.log(bankCustomer.transaction(1234, 0));
console.log(bankCustomer.currentBalance());
console.log(bankCustomer.transaction(1000, 1));

console.log(bankCustomer.currentBalance());