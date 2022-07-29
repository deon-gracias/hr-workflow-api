const { Schema, model } = require("mongoose");

const onboardSchema = new Schema({
  // Personal Details
  firstname: { type: String },
  lastname: { type: String },
  preferredName: { type: String },
  position: { type: String },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: Number },

  // Preferences
  laptop: { type: String, enum: ["mac", "windows", "linux"] },
  mouse: { type: String, enum: ["wired", "wireless"] },
  keyboard: { type: String, enum: ["wired", "wireless"] },
});

const Onboard = model("Onboard", onboardSchema);

module.exports = Onboard;
