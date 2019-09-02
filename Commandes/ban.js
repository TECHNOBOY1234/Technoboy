const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();
    
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Qui ça :question:")
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
    if (!member.bannable) return message.channel.send("Je ne peux pas :confused:")
    message.guild.ban(member, {days: 7})
    message.channel.send({
     embed: {
         color: 0x9400d3,
         title: '**Membre ban avec succès** <a:valider:607208649286483988> **!**',
         description: '```fix \n ID : '+member.id+' \n Pseudo : '+member.user.username+'\n ```' 
     }
 })
    .then(function (message) {
        message.react("✅")
    })
let chaine = message.guild.channels.find('name', '┊▷-logs-messages');
if(chaine) chaine.send("", {
    embed: {
    color: 0x00AAFF,
    author: message.author.name,
    title: '**__LOGS DES BANS DU SERVEUR__**',
    description: `je surveille **${message.client.users.size}** utilisateurs`,
    fields: [ 
    {  
    name: '**__Modérateur :__**',
    value: "**<@"+message.author.id+">**",
    inline: true   
    }, {
    name: '**__Membre :__**',
    value: "**"+member+"**",
    inline: true
    }],
    thumbnail: {
    url: message.client.iconURL
    },
    timestamp: new Date(),
    footer: {
    text: '©Bot By TECHNOBOY',
}}});
};

module.exports.help = {
    name: 'ban'
};