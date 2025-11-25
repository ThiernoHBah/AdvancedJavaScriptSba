import { fetchAllProducts, fetchProductById } from "../src/services/apiServices";
import { logError } from "./utils/errorHandler";

async function main() {
  console.log("Loading products...\n");

  try {
    // Fetch many products
    const products = await fetchAllProducts();

    // show first 3 products (so the output isn't massive)
    for (let i = 0; i < 3; i++) {
      console.log(products[i]?.displayDetails());
    }

    console.log("\nNow fetching a single product by ID...\n");

    // fetch just one product
    const oneProduct = await fetchProductById(1);
    console.log(oneProduct.displayDetails());

  } catch (error) {
    logError(error);
  }
}

main();

