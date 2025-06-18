require('dotenv').config();
const jwt = require("jsonwebtoken");
const User = require('../models/registration')

const auth = async (req, res, next) => {
    try {
      const token = req.header('x-auth-token');
  
      if (!token) {
        return res.status(401).json({ msg: 'No Authentication token, Authorization denied' });
      }
  
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      console.log(process.env.JWT_SECRET);
  
      if(!verified) return res.status(401).json({msg: "Token verification failed, authorization denied"})
      // Determine if the user is a vendor or normal user
      let user = await User.findById(verified.id);
      
  
      if (!user) {
        return res.status(401).json({ msg: 'User or Vendor not found, Authorization denied' });
      }
  
      req.user = user;
      req.token = token;
      next();
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };

  module.exports = {auth};