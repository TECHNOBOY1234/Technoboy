const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#94AB48")
    .setTitle("**Clique ici**")
    .setDescription("**pour aller sur le site web TECHNOBOY.**")
    .setURL("https://technoboy-official.webnode.fr")
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'siteweb'
};