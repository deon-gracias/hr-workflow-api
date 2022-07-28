const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  roles: { type: String, required: true, default: "employee" },
});

const User = model("User", userSchema);

module.exports = User;
