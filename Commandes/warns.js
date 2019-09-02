const Discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync('./json/warns.json'))

module.exports.run = (client, message, args) => {

    message.delete();
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./json/warns.json', JSON.stringify(warns))
        message.channel.send({
            embed: {
                color: 0x9400d3,
                description: `${member} **à été warn avec succès pour la raison suivante : **${reason}** <:warn:605366350419853322>**`
            }
        })
};

module.exports.help = {
    name: 'warn'
};