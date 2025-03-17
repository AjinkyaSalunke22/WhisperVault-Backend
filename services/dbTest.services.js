const mongoose = require('mongoose');

exports.testDbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Database is connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};
