DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS campaigns;
DROP TABLE IF EXISTS player_campaigns;
DROP TABLE IF EXISTS characters_dm;
DROP TABLE IF EXISTS characters_player;
DROP TABLE IF EXISTS character_dm_notes;
DROP TABLE IF EXISTS character_player_notes;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    avatar VARCHAR(255),
    date_created VARCHAR(255)
);

CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    owner_id BIGINT,
    name VARCHAR(255),
    description TEXT,
    edition VARCHAR(255),
    avatar VARCHAR(255),
    invite_link VARCHAR(255),
    date_created VARCHAR(255)
);

CREATE TABLE player_campaigns (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    campaign_id BIGINT,
    date_invited VARCHAR(255)
);

CREATE TABLE characters_dm (
    id SERIAL PRIMARY KEY,
    campaign_id BIGINT,
    name VARCHAR(255),
    race VARCHAR(255),
    gender VARCHAR(255),
    profession VARCHAR(255),
    motivations TEXT,
    background TEXT,
    flaws TEXT,
    ideals TEXT,
    skills TEXT,
    date_created VARCHAR(255)
);

CREATE TABLE characters_player (
    id SERIAL PRIMARY KEY,
    campaign_id BIGINT,
    character_id BIGINT
);

CREATE TABLE character_dm_notes (
    id SERIAL PRIMARY KEY,
    campaign_id BIGINT
);

CREATE TABLE character_player_notes (
    id SERIAL PRIMARY KEY,
    campaign_id BIGINT,
    character_id BIGINT,
    content TEXT
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    campaign_id BIGINT,
    title VARCHAR(255),
    content TEXT,
    public BOOLEAN,
    date VARCHAR(255)
);