const express = require('express')
const router = express.Router()

const { } = require("../controllers/users")


router.get("/", async (req, res, next) =>
    res.status(200).send({ message: "Users PATH" })
)

module.exports = router