function shift(name) {
    let array = name.split('');
    let temp, store = [];
    let result = [], total;
    console.log(array.slice(1));
   for(var i = 0;i < array.length;i++) {
    temp = array.slice(i+1).join('');
    total = array.slice(0, i+1).join('');
    result = temp + total;
    console.log(result);
    store.push(result);
   }
   return store
}
console.log(shift('Hello'));