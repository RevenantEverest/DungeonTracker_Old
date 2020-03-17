const moment = require('moment');
const usersDB = require('../models/usersDB');
const playerCampaignsDB = require('../models/playerCampaignsDB');

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports.invite = (req, res, next) => {
    console.log("Hello World")
    usersDB.findByUsername(req.body.username)
    .then(user => savePlayerCampaign(user))
    .catch(err => {
        if(err instanceof QRE && err.code === qrec.noData) 
            return res.status(404).json({ error: "No User Found" });
        else next(err);
    });

    function savePlayerCampaign(user) {
        playerCampaignsDB.save({user_id: user.id, campaign_id: req.body.campaign_id, date_invited: moment() })
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
    };
};