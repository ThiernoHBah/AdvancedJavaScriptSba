export declare class Product {
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
    constructor(productData: any);
    getPriceWithDiscount(): number;
    displayDetails(): string;
}
//# sourceMappingURL=product.d.ts.map