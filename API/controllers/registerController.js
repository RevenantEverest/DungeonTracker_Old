const bcrypt = require('bcrypt');
const moment = require('moment');
const usersDB = require('../models/usersDB');
const issueToken = require('../middleware/issueToken');
const services = {};

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

async function checkForEmail(req, res, next) {
    usersDB.findByEmail(req.body.email.toLowerCase())
    .then(() => res.status(401).json({ error: "Email Already Exists" }))
    .catch(err => {
        if(err instanceof QRE && err.code === qrec.noData) 
            checkForUsername(req, res, next);
        else next(err);
    })
};

async function checkForUsername(req, res, next) {
    usersDB.findByUsername(req.body.username)
    .then(() => res.status(401).json({ error: "Username Already Exists" }))
    .catch(err => {
        if(err instanceof QRE && err.code === qrec.noData) 
            saveUser(req, res, next);
        else next(err);
    })
};

async function saveUser(req, res, next) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    usersDB.save({ username: req.body.username, email: req.body.email.toLowerCase(), password: hashedPassword, avatar: '', date_created: moment() })
    .then(user => issueToken(res, user))
    .catch(err => next(err));
};

services.register = async (req, res, next) => {
    checkForEmail(req, res, next);
};

module.exports = services;