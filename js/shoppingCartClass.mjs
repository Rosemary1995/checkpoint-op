import CartItem from './cartItem.mjs'
import Product from './productClass.mjs'

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        const cartItem = new CartItem(product, quantity);
        this.items.push(cartItem);
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to calculate the total price of all items in the cart
    calculateTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Method to display cart details
    displayCartDetails() {
        this.items.forEach(item => item.displayDetails());
        console.log(`Total Cart Price: $${this.calculateTotalPrice()}`);
    }
}

const product1 = new Product(1, 'Book', 9.99);
const product2 = new Product(2, 'Pen', 1.49);

const shoppingCart = new ShoppingCart();
shoppingCart.addItem(product1, 2);
shoppingCart.addItem(product2, 3);

shoppingCart.displayCartDetails();
shoppingCart.removeItem(1);
shoppingCart.displayCartDetails();

export default ShoppingCart;
