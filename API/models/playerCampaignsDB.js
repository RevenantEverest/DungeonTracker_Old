const db = require('../config/connection');

module.exports = {
    findAll() {
        return db.many('SELECT * FROM player_campaigns')
    },
    findById(id) {
        return db.one('SELECT * FROM player_campaigns WHERE id = $1', id);
    },
    findByUserId(id) {
        return db.many('SELECT * FROM player_campaigns WHERE id = $1', id);
    },
    save(campaign) {
        return db.one(`INSERT INTO player_campaigns (user_id, campaign_id, date_invited)
        VALUES ($/user_id/, $/campaign_id/, $/date_invited/)
        RETURNING *`, campaign);
    },
    delete(id) {
        return db.none('DELETE FROM player_campaigns WHERE id = $1', id);
    }
};