import ShoppingCart from './shoppingCartClass.mjs'; 
import Product from './productClass.mjs' 


const product1 = new Product(1, 'Book', 9.99);
const product2 = new Product(2, 'Pen', 1.49);

const shoppingCart = new ShoppingCart();
shoppingCart.addItem(product1, 2);
shoppingCart.addItem(product2, 3);

shoppingCart.displayCartDetails();
shoppingCart.removeItem(1);
shoppingCart.displayCartDetails();
