const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#9A44B8")
    .addField("**__Créateur du serveur :__**", message.guild.owner)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
};
module.exports.help = {
    name: 'owner'
};