const Leave = require("../models/leaves");
const Onboard = require("../models/onboard");

// Create Onboard
async function createOnboard(req, res, next) {
  const employeeOnboard = new Onboard({});

  const createdOnboarded = await employeeOnboard.save();

  if (!createdOnboarded)
    return res.status(401).send({ message: "Failed to onboard employee" });

  return res.status(201).send(createdOnboarded);
}

// Update Onboard
async function updateOnboard(req, res, next) {
  const employeeOnboarded = await Onboard.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  return res.status(200).send(employeeOnboarded);
}

// Delete all onboards
async function deleteAllOnboards() {
  await Onboard.deleteMany({});
}

// Get Leaves
async function getLeaves(req, res, next) {
  const approvedFilter = { approved: !!req.body.approved };

  const leaves = await Leave.find({ ...approvedFilter });

  res.status(200).send(leaves);
}

// Apply for leave
async function createLeave(req, res, next) {
  const leave = new Leave(req.body);
  const createdLeave = await leave.save();

  if (!createdLeave) res.status(401).send({ message: "Couldn't create leave" });

  return res.status(201).send(createdLeave);
}

// Approve Leave
async function approveLeave(req, res, next) {
  const updatedLeave = await Leave.findByIdAndUpdate(
    req.params.id,
    { approved: true },
    { new: true }
  );

  return res.status(200).send(updatedLeave);
}

module.exports = {
  createOnboard,
  updateOnboard,
  deleteAllOnboards,
  createLeave,
  getLeaves,
  approveLeave,
};
