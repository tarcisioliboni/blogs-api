const { User } = require('../models');
const { createToken } = require('./jwtService');

const userService = {
  searchUser: async (displayName, email, password, image) => {
    const findUser = await User.findOne(
      { where: { email } },
      );
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
  },

  findUser: async (decoded) => {
    const user = await User.findOne({ where: { email: decoded.email } });
    if (!user || user.password !== decoded.password) {
      return { status: 401, message: 'Erro ao procurar usuário do token.' };
    }
    return user;
  },

  allUsers: async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },

  byId: async (id) => {
    const findById = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
    
    if (!findById) {
      return { status: 404, message: 'User does not exist' };
    }
    return { status: 200, findById };
  },

};

module.exports = userService;
