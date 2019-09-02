const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#E59F59")
    .addField("**__Le nombre de membre sur ce serveur est :__**", message.guild.memberCount)
    .setFooter(message.guild.name, message.author.avatarURL)
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'server-membre'
};