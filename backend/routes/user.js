var express = require("express");
var register_user_admin = require('../controllers/userController');

var app = express.Router();

app.get('/register_user_admin',  register_user_admin)

module.exports = app;