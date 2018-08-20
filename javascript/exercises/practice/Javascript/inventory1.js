var currentInventory = [ 
    {name: "HTC", stock: 25},
    {name: "Nokia", stock: 1000}, 
    {name: "Samsung", stock: 50},
    {name: "Sony", stock: 10}, 
    {name: "Apple", stock: 15}
];

var newInventory = [ 
    {name: "LG", stock: 5}, 
    {name: "Sony", stock: 10}, 
    {name: "Samsung", stock: 5},
    {name: "Apple", stock: 15}
];

function updateInventory(currentInventory, newInventory) {
    newInventory.forEach((inventory) => {
        let inventoryItem = currentInventory.find((current) => {
            return inventory.name === current.name;
        });
        if(inventoryItem === undefined) {
            currentInventory.push(inventory);
        } else {
            inventoryItem.stock += inventory.stock;
        }
    });
    return currentInventory;
}
console.log(updateInventory(currentInventory, newInventory));