//object constructor function called as customer
//should have 3 properties - name, accNum, balance
//should have 2 methods - transaction, checkBalance
//transaction methods takes 2 args 1 deposit 0 - withdrawal
//create 3 customer objects and perfor operations on them
function Customer(name, accountNum, balance) {//object constructor function
this.name = name;
this.accountNum = accountNum;
this.balance = balance;
    this.transaction = function(code, amount) {
        if(code === 1) {
            this.balance = this.balance + amount;
            return `Dear ${this.name} your ${amount} deposited`;
        } 
        if(code === 0) {
            if(amount > this.balance) {
                return 'insufficient balance';
            }  else {
                this.balance = this.balance - amount;
                return `Dear ${this.name} your amount has been withdrawed`;
            }
        }
    }
    this.checkBalance = function() {
        return `${this.balance} is remaining`;
    }
} 
var c1 = new Customer('adarsha', 12345, 2500);
console.log(c1.transaction(1, 1000));
console.log(c1.checkBalance());
console.log(c1.transaction(0, 5000));
console.log(c1.checkBalance());
console.log(c1.transaction(0, 2000));
console.log(c1.checkBalance());