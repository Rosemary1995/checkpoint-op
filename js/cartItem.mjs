import Product from './productClass.mjs' //importing the Product class

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to display cart item details
    displayDetails() {
        console.log(`Product ID: ${this.product.id}`);
        console.log(`Product Name: ${this.product.name}`);
        console.log(`Product Price: $${this.product.price}`);
        console.log(`Quantity: ${this.quantity}`);
        console.log(`Total Price: $${this.getTotalPrice()}`);
    }

    // To calculate the total price for this cart item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

const product1 = new Product(1, 'Book', 9.99);
const cartItem1 = new CartItem(product1, 2);

cartItem1.displayDetails();

export default CartItem;
