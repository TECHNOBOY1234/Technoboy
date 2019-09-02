const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Je suis sur " + message.client.guilds.size + " serveurs")
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'serveur'
};