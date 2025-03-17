exports.sendSuccessResponse = (res, statusCode = 200, message = 'Request was successful', data = {}) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  
exports.sendErrorResponse = (res, statusCode = 500, error) => {
    res.status(statusCode).json({
      success: false,
      message: error.message || 'An error occurred',
      error: error,
    });
  };