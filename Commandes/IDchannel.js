const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#0FDC88")
    .addField("**__Channel ID__**", message.channel.id)
message.channel.send(embed)
};
module.exports.help = {
    name: 'IDchannel'
};