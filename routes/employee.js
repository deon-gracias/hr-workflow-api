const express = require('express')
const router = express.Router()

const { } = require("../controllers/employee")


router.get("/", async (req, res, next) =>
    res.status(200).send({ message: "Employee PATH" })
)

module.exports = router