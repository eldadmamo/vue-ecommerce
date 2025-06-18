require('dotenv').config();
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
const cors = require('cors');
const ports = process.env.PORT;
const database = process.env.MONGODB;

var app = express();
app.use(cors({ origin: '*', credentials: true }));

var client_router = require('./routes/client');
var user_router = require('./routes/user')

app.use(bodyparser.urlencoded({limit:'50mb',extended:true}))
app.use(bodyparser.json({limit:'50mb', extended: true}))

mongoose.connect(database, {useNewUrlParser: true})

app.use('/api',client_router);
app.use('/api', user_router);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});


app.listen(ports, () => {
    console.log(`server is listening to ${ports}`)
})

module.exports = app;