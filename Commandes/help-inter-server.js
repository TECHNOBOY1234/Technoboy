const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("**__Comment marche l'inter-serveur ?__**")
            .addField("Pour commencer, il faut créé un salon nommé ``inter-serveur``, pour envoyer un message faite la commande ``t/m {votre message}``.", ":warning: **Le salon ne doit s'appeler autremant que** ``inter-serveur`` **ou sinon le commande ne marchera pas !**")
            .setFooter(message.author.username, message.author.avatarURL)
            .setTimestamp()
        message.channel.send(embed)
};

module.exports.help = {
    name: 'help-inter-server'
};