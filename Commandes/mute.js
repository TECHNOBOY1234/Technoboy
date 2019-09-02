const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Qui voulez vous Mute ?")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("Je ne peux pas...")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send({
                embed: {
                    color: 0x9400d3,
                    description: `${member} **a été mute avec succès :white_check_mark:**`
                }
            })
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send({
                    embed: {
                        color: 0x9400d3,
                        description: `${member} **a été mute avec succès :white_check_mark:**`
                    }
                })
            })
        }
};

module.exports.help = {
    name: 'mute'
};