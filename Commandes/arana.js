const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setTitle("C'est quoi **__Arana__** ?")
    .addField("**__ArAna__** est un serveur Minecraft pour Cracker, le jeu est modé.", "*Pour plus d'explication, rejoignez le serveur si dessous* => https://discord.gg/knaN66q")
message.author.send(embed)
};
module.exports.help = {
    name: 'ArAna'
};