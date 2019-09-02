const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Pong :ping_pong:", "```fix" + "\n" + client.ping + " de latence." + "\n" + "```")
    .setTimestamp()
message.channel.send(embed)
};

module.exports.help = {
    name: 'ping'
};