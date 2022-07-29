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

async function deleteAllOnboards() {
  await Onboard.deleteMany({});
}

module.exports = { createOnboard, updateOnboard, deleteAllOnboards };
