var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = Schema({
    numbers:{type: String, required: true},
    apply:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    role:{type: String, required: true},
    password:{type: String, required: true},
})

module.exports = mongoose.model('User', userSchema);