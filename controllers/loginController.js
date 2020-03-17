const bcrypt = require('bcrypt');
const usersDB = require('../models/usersDB');
const issueToken = require('../middleware/issueToken');
const services = {};

const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

services.login = async (req, res, next) => {
    usersDB.findByEmail(req.body.email)
    .then(user => {
        bcrypt.compare(req.body.password, user.password, (err, same) => {
            if(err) return res.status.send(500);
            else if(!same) return res.status(401).json({ error: 'Incorrect Email or Password' });
            else issueToken(res, user);
        });
    })
    .catch(err => {
        if(err instanceof QRE && err.code === qrec.noData) 
            return res.status(401).json({ error: "No User Found" });
        else next(err);
    });
};

module.exports = services;