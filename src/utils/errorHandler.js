"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
exports.logError = logError;
// Custom error class used when something goes wrong with the API.
class ApiError extends Error {
    status;
    constructor(message, status) {
        super(message); // passes message to Error class
        this.status = status;
    }
}
exports.ApiError = ApiError;
// This function just prints errors in a nice way.
function logError(error) {
    if (error instanceof ApiError) {
        console.log(`API Error (${error.status}): ${error.message}`);
    }
    else {
        console.log("Something went wrong:", error);
    }
}
//# sourceMappingURL=errorHandler.js.map