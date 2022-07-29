const User = require("../models/users");

async function createUser(req, res, next) {
  const user = new User(req.body);
  const createdUser = await user.save();

  if (!createdUser)
    return res.status(401).send({ message: "Failed to create user" });

  delete createdUser.password;

  return res.status(201).send(createdUser);
}

async function getUser(req, res, next) {
  const user = req.body._id
    ? await User.findById(req.body._id)
    : req.params.id
    ? await User.findById(req.params.id)
    : await User.findOne({ email: req.body.email });

  if (!user) return res.status(404).send({ message: "User not found" });

  delete user.password;

  return res.status(200).send(user);
}

async function deleteUser(req, res, next) {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  if (!deletedUser) return res.status(404).send({ message: "User not found" });

  delete deletedUser.password;

  return res.status(200).send(deletedUser);
}

module.exports = { createUser, getUser, deleteUser };
