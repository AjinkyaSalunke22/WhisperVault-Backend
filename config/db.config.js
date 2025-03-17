const mongoose = require('mongoose');

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      maxPoolSize: process.env.DB_MAX_POOL_SIZE,
    });
    console.log(
      'Connected to the database with connection pooling of ',
      process.env.DB_MAX_POOL_SIZE
    );
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};
