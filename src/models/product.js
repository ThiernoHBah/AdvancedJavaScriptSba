"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
const taxCalculator_1 = require("../utils/taxCalculator");
// These are the properties the API gives us for each product.
class Product {
    id;
    title;
    description;
    price;
    discountPercentage;
    rating;
    stock;
    category;
    brand;
    tags;
    thumbnail;
    images;
    //The constructor runs automatically whenever we create a new Product.
    //It takes the raw API response (productData) and saves the values into our class.
    constructor(productData) {
        this.id = productData.id;
        this.title = productData.title;
        this.description = productData.description;
        this.price = productData.price;
        this.discountPercentage = productData.discountPercentage;
        this.rating = productData.rating;
        this.stock = productData.stock;
        this.category = productData.category;
        this.brand = productData.brand;
        this.tags = productData.tags;
        this.thumbnail = productData.thumbnail;
        this.images = productData.images;
    }
    // This method calculates the price AFTER the discount is applied.
    // Example: price $100 and discount 10% → you pay $90.
    getPriceWithDiscount() {
        const discountAmount = (0, discountCalculator_1.calculateDiscount)(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
    // This method returns a nice formatted string that displays all the product information.
    // It also calculates tax and the final price.
    displayDetails() {
        const discountedPrice = this.getPriceWithDiscount();
        const taxAmount = (0, taxCalculator_1.calculateTax)(discountedPrice, this.category);
        const finalPrice = discountedPrice + taxAmount;
        return `
Product: ${this.title}
Brand: ${this.brand}
Category: ${this.category}

Original Price: $${this.price.toFixed(2)}
Discount: ${this.discountPercentage}%
Price After Discount: $${discountedPrice.toFixed(2)}
Tax: $${taxAmount.toFixed(2)}
Final Price: $${finalPrice.toFixed(2)}

Rating: ${this.rating}
Stock: ${this.stock}

Description: ${this.description}
    `;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map