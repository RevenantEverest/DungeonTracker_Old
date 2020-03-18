const express = require('express');
const controller = require('../controllers/inviteController');
const router = express.Router();

router.route("/")
.post(controller.invite)

module.exports = router;