const { AppError } = require("./Apperror");

function errorHandler(err, _req, res, _next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  //   Logger.error

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}

module.exports = { errorHandler };
