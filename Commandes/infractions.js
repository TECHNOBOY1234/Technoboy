const Discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync('./json/warns.json'))

module.exports.run = (client, message, args) => {

    message.delete();
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:NON:603917166818885682> Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('<:warn:605366350419853322> 10 derniers warns <:warn:605366350419853322>', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
};
module.exports.help = {
    name: 'infractions'
};