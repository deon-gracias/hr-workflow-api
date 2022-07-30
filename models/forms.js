const { Schema, model } = require("mongoose");

const formSchema = new Schema({
    data_pts: { type: Array, required: true },
    is_published: { type:Boolean, required: true},
    status_submitted:{ type:Boolean, required: true},

});

const Form = model("Form", formSchema);

module.exports = Form;