import { Product } from "../models/product";
import { ApiError } from "../utils/errorHandler";

// Fetch ALL products from the API
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");

    // if the server responds with an error code
    if (!response.ok) {
      throw new ApiError("Could not load product list", response.status);
    }

    const data = await response.json();

    // convert raw API data into Product class objects
    const products = data.products.map((item: any) => new Product(item));
    return products;

  } catch (error) {
    throw new ApiError("Error fetching product list", 500);
  }
}

// Fetch ONE product by its ID
export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new ApiError("Product not found", response.status);
    }

    const data = await response.json();
    return new Product(data);

  } catch (error) {
    throw new ApiError("Error fetching single product", 500);
  }
}