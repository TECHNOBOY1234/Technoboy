const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unmute ce membre.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send({
            embed: {
                color: 0x9400d3,
                description: `${member} **a été unmute avec succès :white_check_mark:**`
            }
        })
};

module.exports.help = {
    name: 'unmute'
};