const db = require('../models/notesDB');
const moment = require('moment');

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

module.exports = {
    index(req, res, next) {
        db.findAll()
        .then(notes => res.json({ data: notes }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: [] });
            else next(err);
        });
    },
    getOne(req, res, next) {
        db.findById(req.params.id)
        .then(note => res.json({ data: note }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: {} });
            else next(err);
        });
    },
    getByUserId(req, res, next) {
        db.findByUserId(req.params.id)
        .then(notes => res.json({ data: notes }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: [] });
            else next(err);
        });
    },
    getByCampaignId(req, res, next) {
        db.findByCampaignId(req.params.id)
        .then(notes => res.json({ data: notes }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: [] });
            else next(err);
        });
    },
    getByCampaignIdAndUserId(req, res, next) {
        db.findByCampaignIdAndUserId({ campaign_id: req.params.campaign_id, user_id: req.params.user_id })
        .then(notes => res.json({ data: notes }))
        .catch(err => {
            if(err instanceof QRE && err.code === qrec.noData) 
                return res.json({ data: [] });
            else next(err);
        });
    },
    save(req, res, next) {
        req.body.date = moment().format("YYYY/MM/DD");
        db.save(req.body)
        .then(note => res.json({ data: note }))
        .catch(err => next(err));
    },
    update(req, res, next) {
        db.update(req.body)
        .then(note => res.json({ data: note }))
        .catch(err => next(err));
    },
    delete(req, res, next) {
        db.delete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
    }
};