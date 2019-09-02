const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("#94AB48")
    .setTitle("<:YouTube:605366488286625813> **Clique ici**")
    .setDescription("**pour sur la chaîne youtube de TECHNOBOY.**")
    .setURL("https://www.youtube.com/channel/UCzYSf-VLGKlqmnT6_E3hAXw?view_as=subscriber")
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'ytb'
};