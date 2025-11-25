"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiServices_1 = require("../src/services/apiServices");
const errorHandler_1 = require("./utils/errorHandler");
async function main() {
    console.log("Loading products...\n");
    try {
        // Fetch many products
        const products = await (0, apiServices_1.fetchAllProducts)();
        // show first 3 products (so the output isn't massive)
        for (let i = 0; i < 3; i++) {
            console.log(products[i]?.displayDetails());
        }
        console.log("\nNow fetching a single product by ID...\n");
        // fetch just one product
        const oneProduct = await (0, apiServices_1.fetchProductById)(1);
        console.log(oneProduct.displayDetails());
    }
    catch (error) {
        (0, errorHandler_1.logError)(error);
    }
}
main();
//# sourceMappingURL=main.js.map