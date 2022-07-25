const jwt = require('jsonwebtoken');
const { User } = require('../models');
const jwtService = require('./jwtService');
const { findOne } = require('./userService');

const loginService = {

  loginS: async (email, password) => {
    const user = await User.findOne(
      { where: { email } },
      );  

    if (!user || user.password !== password) {
      return { message: 'Invalid fields' };
    }
    const token = jwtService.createToken({ email, password, id: user.id });
    return { token };
  },

  validateToken: async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await findOne(decoded);
      req.user = user;
  
      next();
    } catch (error) {
      if (error.message === 'jwt malformed') {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
    }
  },

};

module.exports = loginService;