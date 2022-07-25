const { User } = require('../models');
const { createToken } = require('./jwtService');

const userService = async (displayName, email, password, image) => {
  const findUser = await User.findOne({ where: { email } });
  if (findUser === null) {
    await User.create({
      displayName,
      email,
      password,
      image,
    });
    const token = createToken({ email, password });
    return { token };
  }
  if (findUser.email === email) {
    return { message: 'User already registered' };
  }
};

const findOne = async (decoded) => {
  const user = await User.findOne({ where: { email: decoded.email } });
  if (!user || user.password !== decoded.password) {
    return { status: 401, message: 'Erro ao procurar usuário do token.' };
  }
  return user;
};

module.exports = {
  userService,
  findOne,
};
