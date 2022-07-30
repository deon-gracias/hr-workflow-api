const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  
  assigner:{type: Schema.Types.ObjectId, required: true },
  assignee:{type: Schema.Types.ObjectId, required: true },
  assigned_on: { type: Date, required: true },
  deadline: { type: Date, required: true },
  required_data:{type:Array,required:true },
  comment: { type: String },
  completed: { type: Boolean,default: false, required: tru },

  approved: { type: Boolean, default: false, required: true },
});

const Leave = model("Leave", taskSchema);

module.exports = Leave;
