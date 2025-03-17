const express = require('express');
const router = express.Router();
const dbTestController = require('../controllers/dbTest.controllers');

router.get('/', dbTestController.testDatabase);

module.exports = router;
