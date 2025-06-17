require('dotenv').config();
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
const ports = process.env.PORT;
const database = process.env.MONGODB;

var app = express();

var client_router = require('./routes/client');
var user_router = require('./routes/user')

app.use(bodyparser.urlencoded({limit:'50mb',extended:true}))
app.use(bodyparser.json({limit:'50mb', extended: true}))

mongoose.connect(database, {useNewUrlParser: true})

app.use('/api',client_router);
app.use('/api', user_router);


app.listen(ports, () => {
    console.log(`server is listening to ${ports}`)
})

module.exports = app;