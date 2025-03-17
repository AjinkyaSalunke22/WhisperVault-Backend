const { testDbConnection } = require('../services/dbTest.services');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/generic.utils');

exports.testDatabase = async (req, res) => {
  try {
    await testDbConnection();
    sendSuccessResponse(res, 200, 'Database is connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    sendErrorResponse(res, 500, error);
  }
};
