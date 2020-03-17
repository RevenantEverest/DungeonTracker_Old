const db = require('../config/connection');

module.exports = {
    findAll() {
        return db.many('SELECT * FROM campaigns');
    },
    findById(id) {
        return db.one('SELECT * FROM campaigns WHERE id = $1', id);
    },
    findByOwnerId(id) {
        return db.many('SELECT * FROM campaigns WHERE owner_id = $1', id);
    },
    findByUserId(id) {
        return db.many(`SELECT * FROM campaigns WHERE owner_id = $1
        UNION SELECT campaign_id, owner_id, name, description, edition, avatar, invite_link, date_invited 
        FROM player_campaigns JOIN campaigns ON player_campaigns.campaign_id = campaigns.id WHERE user_id = $1`, id);
    },
    save(campaign) {
        return db.one(`INSERT INTO campaigns (owner_id, name, description, edition, avatar, invite_link, date_created)
        VALUES ($/owner_id/, $/name/, $/description/, $/edition/, $/avatar/, $/invite_link/, $/date_created/)
        RETURNING *`, campaign);
    },
    update(campaign) {
        return db.one(`UPDATE campaigns 
        SET
        name = $/name/,
        description = $/description/,
        eiditon = $/edition/,
        avatar = $/avatar/,
        invite_link = $/invite_link/
        WHERE id = $/id/ AND owner_id = $/owner_id/
        RETURNING *`, campaign)
    },
    delete(id) {
        return db.none('DELETE FROM campaigns WHERE id = $1', id);
    }
};