const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#9A44B8")
    .addField("**__ID du serveur__**", message.guild.id)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'IDserver'
};