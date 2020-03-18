const Discord = require('discord.js');

module.exports = async (bot, message) => {
    if(message.content.toLowerCase() === "ping")
        return message.channel.send("Pong!");
};