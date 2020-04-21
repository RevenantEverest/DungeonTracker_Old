const db = require('../config/connection');

module.exports = {
    findAll() {
        return db.many('SELECT * FROM notes');
    },
    findById() {
        return db.one('SELECT * FROM notes WHERE id = $1 ORDER BY id ASC', id);
    },
    findByUserId() {
        return db.one('SELECT * FROM notes WHERE user_id = $1 ORDER BY id ASC', id);
    },
    findByCampaignId() {
        return db.one('SELECT * FROM notes WHERE campaign_id = $1 ORDER BY id ASC', id);
    },
    findByCampaignIdAndUserId(ids) {
        return db.many('SELECT * FROM notes WHERE campaign_id = $/campaign_id/ AND user_id = $/user_id/ ORDER BY id ASC', ids);
    },
    save(note) {
        return db.one(`INSERT INTO notes (user_id, campaign_id, title, content, public, date) 
        VALUES ($/user_id/, $/campaign_id/, $/title/, $/content/, $/public/, $/date/)
        RETURNING *`, note);
    },
    update(note) {
        return db.one(`UPDATE notes 
        SET
        title = $/title/,
        content = $/content/,
        public = $/public/
        WHERE id = $/id/
        RETURNING *`, note);
    },
    delete(id) {
        return db.none('DELETE FROM notes WHERE id = $1', id);
    }
};