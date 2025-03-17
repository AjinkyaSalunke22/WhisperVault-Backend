const express = require('express');
const router = express.Router();
const serverTestControllers = require('../controllers/serverTest.controllers');

router.get('/', serverTestControllers.testServer);

module.exports = router;
