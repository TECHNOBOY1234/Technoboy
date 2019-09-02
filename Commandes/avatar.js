const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

const membre = message.mentions.members.first() || message.member;
// if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#84B6DB")
    .setAuthor(`demandé par ${message.author.tag}`)
    .setImage(membre.user.avatarURL)
    .setFooter(membre.user.tag, membre.user.avatarURL)
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'avatar'
};