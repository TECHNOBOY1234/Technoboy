const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = (client, message, args) => {

    message.delete();

    let embed = new Discord.RichEmbed()
        .setColor("#E6EB3D")
        .setTitle("**Information sur le serveur :**")
        .addField("Nom du serveur", "**"+message.guild.name+"**")
        .addField("Serveur ID", "**"+message.guild.id+"**")
        .addField("Channel AFK", "**"+message.guild.afkChannel+"**")
        .addField("Channel AFK ID", "**"+message.guild.afkChannelID+"**")
        .addField("Créateur du serveur", "**"+message.guild.owner+"**")
        .addField("ID du créateur du serveur", "**"+message.guild.ownerID+"**")
        .addField("Création du serveur", "**"+moment.utc(message.guild.createdAt).format('LL')+"**")
        .addField("Nombre de channnel", "**"+message.guild.channels.size+"**")
        .addField("Nombre de Membre", "**"+message.guild.memberCount+"**" + "\n")
        .setFooter(message.guild.name, message.guild.avatarURL)
        .setTimestamp()
    message.channel.send(embed)
};

module.exports.help = {
    name: 'serverinfos'
};