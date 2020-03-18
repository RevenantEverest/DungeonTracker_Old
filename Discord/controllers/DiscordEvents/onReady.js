const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');

module.exports = async (bot) => {
    if(process.env.ENVIRONMENT === "DEV")
        return console.log(chalk.hex("#00ff00")("[LOG]") + " DungeonTracker Ready");
    
    let embed = new Discord.RichEmbed();
    embed.setColor(0xff9900).setTitle('DungeonTracker Ready').setFooter(moment().format("LLLL") + " EST");

    bot.channels.get("689622669502578689").send(embed);
};