const { loginS } = require('../services/loginService');
const jwtService = require('../services/jwtService');
const loginSchema = require('../schemas/loginSchema');

const userLogin = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const { error } = loginSchema.validate({
      email,
      password,
    });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
  
    const login = await loginS(email, password);
    if (login.message) {
      return res.status(400).json(login);
    }
    res.status(200).json({ token: login.token });
  },

  validateToken: (req, res, next) => {
    const { authorization } = req.headers;
  
    jwtService.validateToken(authorization);
  
    next();
  },
};

module.exports = userLogin;
