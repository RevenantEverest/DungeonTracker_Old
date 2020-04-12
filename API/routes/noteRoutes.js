const express = require('express');
const controller = require('../controllers/notesController');
const router = express.Router();

router.route("/")
.get(controller.index)
.post(controller.save)
.put(controller.update)

router.route("/id/:id")
.get(controller.getOne)
.delete(controller.delete)

router.route("/user/id/:id")
.get(controller.getByUserId)

router.route("/campaign/id/:id")
.get(controller.getByCampaignId)

router.route("/user/id/:user_id/campaign/id/:campaign_id")
.get(controller.getByCampaignIdAndUserId)

module.exports = router;