const User = require("../models/users");

async function createUser(req, res, next) {
  const user = new User(req.body);
  const createdUser = await user.save();

  if (!user) return res.status(401).send({ message: "Failed to create user" });

  return res.status(201).send(createdUser);
}

module.exports = { createUser };
