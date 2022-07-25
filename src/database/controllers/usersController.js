const { searchUser, allUsers, byId } = require('../services/userService');
const { userSchema } = require('../schemas');

const usersController = {
  user: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { error } = userSchema.validate({
      displayName,
      email,
      password,
    });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const existsUser = await searchUser(displayName, email, password, image);
    if (existsUser.message) {
      return res.status(409).json(existsUser);
    }
    res.status(201).json({ token: existsUser.token });
  },

  allUsers: async (_req, res) => {
    const users = await allUsers();
    res.status(200).json(users);
  },

  byId: async (req, res) => {
    const { id } = req.params;
    const { status, message, findById } = await byId(id);
    if (message) {
      return res.status(status).json({ message });
    }
    return res.status(status).json(findById);
  },  
};

module.exports = usersController;
