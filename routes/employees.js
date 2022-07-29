const express = require("express");
const { createOnboard, updateOnboard } = require("../controllers/employees");
const router = express.Router();

router.get("/", async (req, res, next) =>
  res.status(200).send({ message: "Employees PATH" })
);

router.post("/onboard/create", createOnboard);

router.put("/onboard/:id", updateOnboard);

module.exports = router;
