// Custom error class used when something goes wrong with the API.
export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message); // passes message to Error class
    this.status = status;
  }
}

// This function just prints errors in a nice way.
export function logError(error: any) {
  if (error instanceof ApiError) {
    console.log(`API Error (${error.status}): ${error.message}`);
  } else {
    console.log("Something went wrong:", error);
  }
}