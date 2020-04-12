const db = require('../config/connection');

module.exports = {
    findAll() {
        return db.many('SELECT * FROM notes');
    },
    findById() {
        return db.one('SELECT * FROM notes WHERE id = $1', id);
    },
    findByUserId() {
        return db.one('SELECT * FROM notes WHERE user_id = $1', id);
    },
    findByCampaignId() {
        return db.one('SELECT * FROM notes WHERE campaign_id = $1', id);
    },
    findByCampaignIdAndUserId(ids) {
        return db.one('SELECT * FROM notes WHERE campaign_id = $/campaign_id/ AND user_id $/user_id/', ids);
    },
    save(note) {
        return db.one(`INSERT INTO notes (user_id, campaign_id, content, public) 
        VALUES ($/user_id/, $/campaign_id/, $/content/, $/public/)
        RETURNING *`, note);
    },
    update(note) {
        return db.one(`UPDATE notes 
        SET
        content = $/content/,
        public = $/public/
        WHERE id = $/id/
        RETURNING *`, note);
    },
    delete(id) {
        return db.none('DELETE FROM notes WHERE id = $1', id);
    }
};