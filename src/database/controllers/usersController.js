const usersService = require('../services/userService');
const userSchema = require('../schemas/loginSchema');

const user = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { error } = userSchema.validate({
    displayName,
    email,
    password,
  });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const existsUser = await usersService(displayName, email, password, image);
  if (existsUser.message) {
    return res.status(409).json(existsUser);
  }
  res.status(201).json({ token: existsUser.token });
};

module.exports = user;
