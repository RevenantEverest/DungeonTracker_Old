const jwt = require('jsonwebtoken');

module.exports = (res, user) => {
    const payload = { id: user.id, username: user.username, email: user.email, avatar: user.avatar };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, { 
        expiresIn: '12h'
    });
    payload.token = token;
    res.json({ data: payload });
};