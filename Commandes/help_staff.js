const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();

let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("<:warning:603917749764358155> **__Ces commandes sont or de votre porter, seul le staff peut l'utiliser !__** <:warning:603917749764358155>")
    .addField("*Vous ne pouvez pas faire ces commandes seulement si votre id est inscrit dans le code !*", "```diff" + "\n" + "- t/reset = pour redémarrer le bot" + "\n" + "- t/fonda {message} = pour le fondateur (inter-server" + "\n" + "t/satff {message} = pour le staff (inter-server)" + "\n" + "- t/off = pour éttaindre le bot" + "\n" + "- t/bl = pour black liste un utilisateur/bot" + "\n" + "- t/unbl = pour enlever un utilisateur/bot de la black liste" + "\n"  + "- t/punition = pour interdire l'inter-serveur" + "\n" + "- t/miseajoure = mettre ajour le bot" + "\n" + "```" + "\n"  + "\n" + "Demandé par " + "@" +message.author.tag)
message.channel.send(embed)
};
module.exports.help = {
    name: 'help-staff'
};