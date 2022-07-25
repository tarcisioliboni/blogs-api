const jwt = require('jsonwebtoken');

const jwtService = {
  createToken: (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return token;
  },
 
  validToken: (token) => {
    try {
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
      return data;
    } catch (error) {
      return { message: error.message };
    }
  },
};

module.exports = jwtService;
