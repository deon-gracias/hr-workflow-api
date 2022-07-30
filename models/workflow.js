const { Schema, model } = require("mongoose");

const workflowSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name:{ type:String, required:true},
//   a parameter to refer forms
  form_id : {type:Schema.Types.ObjectId},
  approval:{ type:Boolean, required:true},

});

const workflow = model("workflow", workflowSchema);

module.exports = workflow;