const db = require('../models/campaignsDB');
const moment = require('moment');
const utils = require('../utils/utils');

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
    index(req, res, next) {
        db.findAll()
        .then(campaigns => res.json({ data: campaigns }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: [] });
            else next(err);
        });
    },
    getOne(req, res, next) {
        db.findById(req.params.id)
        .then(campaign => res.json({ data: campaign }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: {} });
            else next(err);
        });
    },
    getByOwnerId(req, res, next) {
        db.findByOwnerId(req.params.id)
        .then(campaigns => res.json({ data: campaigns }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: {} });
            else next(err);
        });
    },
    getUserCampaigns(req, res, next) {
        db.findByUserId(req.params.id)
        .then(campaigns => res.json({ data: campaigns }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                console.log("No Campaigns");
            else next(err);
        });
    },
    save(req, res, next) {
        req.body.avatar = req.file ? req.file.path : '';
        req.body.invite_link = utils.generateLink(10);
        req.body.date_created = moment();
        db.save(req.body)
        .then(campaign => res.json({ data: campaign }))
        .catch(err => next(err));
    },
    update(req, res, next) {
        db.update(req.body)
        .then(campaign => res.json({ data: campaign }))
        .catch(err => next(err));
    },
    delete(req, res, next) {
        db.delete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
    }
};