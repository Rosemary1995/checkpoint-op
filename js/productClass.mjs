class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    displayDetails() {
        console.log(`Product ID: ${this.id}`);
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price}`);
    }
}

export default Product; //exporting the product class

const product1 = new Product(1, 'Book', 9.99);
const product2 = new Product(2, 'Pen', 1.49);

product1.displayDetails();
product2.displayDetails();
