const mongoose = require("mongoose");

require("dotenv").config();

function connectToDb() {
  mongoose
    .connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/hrworkflowdb",
      { useNewUrlParser: true }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}

module.exports = { connectToDb };
