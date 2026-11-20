
// Inventory Management System

let inventory = [];

function addProduct(id, name, quantity, price) {
    let product = inventory.find(p => p.id === id);

    if (product) {
        console.log("Product ID already exists!");
        return;
    }

    inventory.push({ id, name, quantity, price });
    console.log("Product added successfully!");
}

function viewInventory() {
    if (inventory.length === 0) {
        console.log("Inventory is empty!");
        return;
    }

    console.log("\n----- INVENTORY -----");

    inventory.forEach(product => {
        console.log(
            `ID: ${product.id} | Name: ${product.name} | Stock: ${product.quantity} | Price: ₹${product.price}`
        );
    });
}

function updateStock(id, quantity) {
    let product = inventory.find(p => p.id === id);

    if (!product) {
        console.log("Product not found!");
        return;
    }

    product.quantity += quantity;
    console.log("Stock updated successfully!");
}

function sellProduct(id, quantity) {
    let product = inventory.find(p => p.id === id);

    if (!product) {
        console.log("Product not found!");
        return;
    }

    if (product.quantity < quantity) {
        console.log("Insufficient stock!");
        return;
    }

    product.quantity -= quantity;
    console.log("Product sold successfully!");
    console.log("Total Amount: ₹" + product.price * quantity);
}

function deleteProduct(id) {
    let index = inventory.findIndex(p => p.id === id);

    if (index === -1) {
        console.log("Product not found!");
        return;
    }

    inventory.splice(index, 1);
    console.log("Product deleted successfully!");
}

// Main Program

addProduct(101, "Laptop", 10, 50000);
addProduct(102, "Mouse", 25, 500);
addProduct(103, "Keyboard", 15, 1200);

viewInventory();

updateStock(101, 5);

sellProduct(102, 3);

viewInventory();

deleteProduct(103);

viewInventory();
