const express = require("express");
const {
  createUser,
  getUser,
  deleteUser,
  deleteAllUsers,
} = require("../controllers/users");
const router = express.Router();

router.get("/", async (req, res, next) =>
  res.status(200).send({ message: "Users PATH" })
);

router.post("/signup", createUser);

router.get("/signin", getUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.delete("/deleteAll", deleteAllUsers);

module.exports = router;
