const express = require("express");
const {
  createOnboard,
  updateOnboard,
  createLeave,
  approveLeave,
  getLeaves,
} = require("../controllers/employees");
const router = express.Router();

router.get("/", async (req, res, next) =>
  res.status(200).send({ message: "Employees PATH" })
);

router.post("/onboard/create", createOnboard);

router.put("/onboard/:id", updateOnboard);

router.get("/leaves/", getLeaves);

router.post("/leaves/apply", createLeave);

router.patch("/leaves/approve/:id", approveLeave);

module.exports = router;
