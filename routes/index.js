var express = require('express');
var router = express.Router();

// GET Home Page
router.get('/', function (req, res, next) {
  res.status(200).send({ message: "HR Worlflow API" })
});

module.exports = router;
