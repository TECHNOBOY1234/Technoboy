const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {

    message.delete();

    let embed = new Discord.RichEmbed()
        .setColor("#E6EB3D")
        .setTitle("**Infos de l'utilisateur :**")
        .addField("**Avatar lien**", "**"+message.author.avatarURL+"**")
        .addField("**User ID**", "**"+message.author.id+"**")
        .addField("**Tag user**", "**"+message.author.tag+"**")
        .addField("**Création du compte**", "**"+moment.utc(message.author.createdAt).format('LL')+"**")
        .addField("**Joue à**", message.author.presence.game ? message.author.presence.game.name : 'Aucun jeu')
        .addField("**Nous a rejoind le**", "**"+moment.utc(message.author.joinedAt).format('LL')+"**")
        .addField("**Latence**", "**"+client.ping+"**")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
    message.channel.send(embed)
};

module.exports.help = {
    name: 'userinfos'
};