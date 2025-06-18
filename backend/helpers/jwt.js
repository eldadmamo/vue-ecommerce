const jwt = require("jwt-simple");
const moment = require("moment");
var secret = 'eldad'

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surnames: user.surnames,
        email: user.email,
        password: user.password,
        iat: moment().unix(),
        exp: moment().add(1,'day').unix()
    }

    return jwt.encode(payload,secret);
}
