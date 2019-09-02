const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({
            embed: {
                color: 0x921212,
                title: '<a:NON:603917166818885682> Ta pas les permes :rage:'
            }
        });
        let member = message.mentions.members.first()
        if (!member) return message.channel.send({
            embed: {
                color: 0x921212,
                title: 'Vous devez mentionné une personne !'
            }
        });

        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(member.user.username + " **a gagnez le __Giveway__, GG à lui !** <a:givefun:603916686252572672>")
        message.channel.send(embed)
        .then(function (message) {
            message.react("🤘")
            message.react("✋")
            message.react("👍")
            message.react("👏")
            message.react("🤙")
            message.react("😇")
                  })
};
module.exports.help = {
    name: 'winner'
};