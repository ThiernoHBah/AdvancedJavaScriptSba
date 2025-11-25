import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from '../utils/taxCalculator';

 // These are the properties the API gives us for each product.
export class Product {  
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  brand: string;
  tags: string[];
  thumbnail: string;
  images: string[];

  //The constructor runs automatically whenever we create a new Product.
  //It takes the raw API response (productData) and saves the values into our class.
  constructor(productData: any) {
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
  getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(this.price, this.discountPercentage);
    return this.price - discountAmount;
  }

  // This method returns a nice formatted string that displays all the product information.
  // It also calculates tax and the final price.
  displayDetails(): string {
    const discountedPrice = this.getPriceWithDiscount();
    const taxAmount = calculateTax(discountedPrice, this.category);
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