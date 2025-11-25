"use strict";
// This function calculates the DISCOUNT AMOUNT in dollars.
// Example: price = 100, discount = 10% → returns 10.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercent) {
    // percentage formula
    const discount = price * (discountPercent / 100);
    return discount;
}
//# sourceMappingURL=discountCalculator.js.map