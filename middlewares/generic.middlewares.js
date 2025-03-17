const express = require('express');
const morgan = require('morgan');

exports.jsonMiddleware = express.json();

exports.morganMiddleware = morgan('dev');
