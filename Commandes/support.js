const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#9A44B8")
    .setTitle("**Clique ici**")
    .setDescription("**pour rejoindre le serveur support.**")
    .setURL("https://discord.gg/brdxvN")
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'support'
};