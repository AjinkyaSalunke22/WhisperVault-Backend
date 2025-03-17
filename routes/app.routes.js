const express = require('express');
const router = express.Router();

const serverTestRoutes = require('./serverTest.routes');
const dbTestRoutes = require('./dbTest.routes');

router.use('/server-test', serverTestRoutes);
router.use('/db-test', dbTestRoutes);

module.exports = router;
