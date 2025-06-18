var express = require("express");
var user_admin = require('../controllers/userController');
var app = express.Router();
var authenticate = require('../middlewares/authenticate');

app.post('/register', user_admin.register_user_admin)
app.post('/login', user_admin.login_user);

module.exports = app;