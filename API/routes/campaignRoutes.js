const express = require('express');
const controller = require('../controllers/campaignsController');
const router = express.Router();

const utils = require('../utils/utils');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/campaigns');
    },
    filename: (req, file, callback) => {
        let fileName = `${req.body.owner_id}_${utils.generateLink(20)}.${file.mimetype.split("/")[1]}`;
        callback(null, fileName);
    }
});
const upload = multer({ storage: storage });

router.route("/")
.get(controller.index)
.post(upload.single("avatar"), controller.save)
.put(controller.update)

router.route("/id/:id")
.get(controller.getOne)
.delete(controller.delete)

router.route("/owner/:id")
.get(controller.getByOwnerId)

router.route("/user/:id")
.get(controller.getUserCampaigns)

module.exports = router;