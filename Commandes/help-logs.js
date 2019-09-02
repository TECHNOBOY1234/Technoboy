const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("**__Comment marche les logs ?__**")
    .addField("Pour commencer, il faut créé un salon nommé ``┊▷-logs-messages`` et c'est bon ^^")
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'help-logs'
};