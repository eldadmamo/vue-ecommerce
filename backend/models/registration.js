var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = Schema({
    name:{type: String, required: true},
    surnames:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    role:{type: String, required: true},
    password:{type: String, required: true},
    status:{type: Boolean, default:true, required: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema);