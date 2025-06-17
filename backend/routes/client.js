var express = require("express");
var testing = require('../controllers/clientController');
var app = express.Router();

app.get('/testing',  testing)

module.exports = app;