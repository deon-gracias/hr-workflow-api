const express = require("express");
const { createUser } = require("../controllers/users");
const router = express.Router();

router.get("/", async (req, res, next) =>
  res.status(200).send({ message: "Users PATH" })
);

router.post("/signup", createUser);

module.exports = router;
