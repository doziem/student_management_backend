class AppError extends Error {
  statusCode;
  isOperational;

  constructor(statusCode, message, isOperational) {
    super(message);
    this.name = "AppError";
    ((this.statusCode = statusCode), (this.isOperational = isOperational));
  }
}

module.exports = { AppError };
