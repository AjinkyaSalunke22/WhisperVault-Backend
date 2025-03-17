const express = require('express');
const router = express.Router();

const serverTestRoutes = require('./serverTest.routes');

router.use('/server-test', serverTestRoutes);

module.exports = router;