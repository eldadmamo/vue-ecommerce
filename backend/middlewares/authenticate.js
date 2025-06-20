require('dotenv').config();
const jwt = require("jsonwebtoken");
const User = require('../models/registration');

const auth = async (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    
    if (!token) {
      return res.status(401).json({ msg: 'No authentication token' });
    }

    // Add debug logging
    console.log('Received token:', token);
    console.log('JWT Secret:', process.env.JWT_SECRET);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!verified) {
      return res.status(401).json({ msg: 'Token verification failed' });
    }

    const user = await User.findById(verified.id);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    console.error('Authentication error:', e.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { auth };