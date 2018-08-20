//You will be given an array which lists the current inventory of stock in your store. Example:
//Your will also be given an array which list the new inventory being delivered to your store today. Example:
//Your task is to write a function that when invoked
//updateInventory(currentInventory, newInventory);
//returns the updated list of your current inventory :

// [{name: "HTC", stock: 25}, {name: "Nokia", stock: 1000}, {name: "Samsung", stock: 55}, {name: "Sony", stock: 20}, {name: "Apple", stock: 30}, {name: "LG", stock: 5}]

var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5},{name: "Apple", stock: 15}];

function updateInventory(currentInventory, newInventory) {
    var result;
newInventory.forEach(function(item) {
        result = currentInventory.find(function(value) {
            return value.name === item.name;
        });
        if(result === undefined) {
            currentInventory.push(newInventory);
        } else {
            result.stock = result.stock + newInventory.stock;
        }
});
//asd.push(result);
return currentInventory;
}
console.log(updateInventory(currentInventory, newInventory));