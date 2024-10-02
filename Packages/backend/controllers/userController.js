const User = require('../models/User');

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: 'User deleted' });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
