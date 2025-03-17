const { sendSuccessResponse } = require('../utils/generic.utils');

exports.testServer = (req, res) => {
  sendSuccessResponse(res, 200, 'Request was successful', { message: 'Server is running successfully' });
};
