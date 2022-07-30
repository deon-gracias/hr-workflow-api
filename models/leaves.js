const { Schema, model } = require("mongoose");

const leaveSchema = new Schema({
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  type: { type: String, required: true },
  comment: { type: String },
  approved: { type: Boolean, default: false, required: true },
});

const Leave = model("Leave", leaveSchema);

module.exports = Leave;
