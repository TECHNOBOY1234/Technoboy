const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("**__Comment marche l'inter-pub ?__**")
            .setFooter(message.author.username, message.author.avatarURL)
            .addField("Pour commencer, il faut créé un salon nommé ``inter-pub``, pour envoyer votre pub faite la commande ``t/pub {votre pub}``.", ":warning: **Le salon ne doit s'appeler autremant que** ``inter-pub`` **ou sinon le commande ne marchera pas !**")
            .setTimestamp()
        message.channel.send(embed)
};

module.exports.help = {
    name: 'help-inter-pub'
};