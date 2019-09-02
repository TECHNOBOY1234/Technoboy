const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600; 
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);
let uptime = `<:uptime:605807096939937794> ${hours} heures, ${minutes} minutes, ${seconds} secondes`;

var embed220 = new Discord.RichEmbed()
.setTitle("Uptime")
.setDescription(uptime)
.setColor("RANDOM")
.setTimestamp()
.setFooter("Uptime du bot.")
message.channel.send(embed220)
};
module.exports.help = {
    name: 'uptime'
};