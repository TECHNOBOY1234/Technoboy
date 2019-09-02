const Discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync('./json/warns.json'))

module.exports.run = (client, message, args) => {

    message.delete();
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande.")
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
        if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne pas unwarn ce membre.")
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
        warns[member.id].shift()
        fs.writeFileSync('./json/warns.json', JSON.stringify(warns))
        message.channel.send({
            embed: {
                color: 0x9400d3,
                description: `${member} **c'est fait enlevé son dérnier warns. <:warn:605366350419853322>**`
            }
        })
};

module.exports.help = {
    name: 'unwarn'
};