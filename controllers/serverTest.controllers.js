const { sendSuccessResponse } = require('../utils/generic.utils');

exports.testServer = (req, res) => {
  sendSuccessResponse(res, 200, 'Server is running successfully');
};
