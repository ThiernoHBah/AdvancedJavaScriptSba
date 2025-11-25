"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllProducts = fetchAllProducts;
exports.fetchProductById = fetchProductById;
const product_1 = require("../models/product");
const errorHandler_1 = require("../utils/errorHandler");
// Fetch ALL products from the API
async function fetchAllProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        // if the server responds with an error code
        if (!response.ok) {
            throw new errorHandler_1.ApiError("Could not load product list", response.status);
        }
        const data = await response.json();
        // convert raw API data into Product class objects
        const products = data.products.map((item) => new product_1.Product(item));
        return products;
    }
    catch (error) {
        throw new errorHandler_1.ApiError("Error fetching product list", 500);
    }
}
// Fetch ONE product by its ID
async function fetchProductById(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            throw new errorHandler_1.ApiError("Product not found", response.status);
        }
        const data = await response.json();
        return new product_1.Product(data);
    }
    catch (error) {
        throw new errorHandler_1.ApiError("Error fetching single product", 500);
    }
}
//# sourceMappingURL=apiServices.js.map