const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("**__Voici ton ID :__**", message.author.id)
        .setTimestamp()
    message.author.send(embed)
};
module.exports.help = {
    name: 'myID'
};