const express = require('express');
const controller = require('../controllers/registerController');
const router = express.Router();

router.route("/")
.post(controller.register)

module.exports = router;