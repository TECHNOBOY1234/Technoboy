const Discord = require("discord.js");

var interserverCooldown = new Set();

module.exports.run = (client, message, args) => {

    if (message.channel.name === 'inter-pub' && !message.author.bot) {
        message.delete();
        if (interserverCooldown.has(message.author.id)) return message.channel.send('Vous ne pouvez utiliser l\'inter-pub qu\'une fois toutes les 5 minutes.');
    	if(message.author.id);
          message.guild.channels.filter(c => c.type === "text").random().createInvite().then(invite => {let lien = invite.code;
            let msg = message.content.split(' ')
            msg.shift()
            let question = msg.join(' ')
            const embed = {
                "color": 23606,
                "footer": {
                    "icon_url": client.user.avatarURL,
                    "text": client.user.tag
                },
                "author": {
                    "name": JSON.parse.text,
                    "url": "https://discordapp.com",
                    "icon_url": JSON.parse.image
                },
                "fields": [
                    {
                        "name": "**__Contenu de la pub :__**",
                        "value": question
                    },
                    {
                        "name": '\u200B',
                        "value": '\u200B'
                    }]
            };
            interserverCooldown.add(message.author.id);
            setTimeout(function () {
                interserverCooldown.delete(message.author.id);
            }, 300000);
            client.channels.forEach(channel => {
                if(channel.name === 'inter-pub' && channel.type === 'text' && channel.id !== message.channel.id) {
                    channel.send({ embed });
                }
            });
        });
    }
    message.delete();
    let msg = message.content.split(' ')
            msg.shift()
            let question = msg.join(' ')
    message.channel.send({
        embed: {
            color: 0x3be03b,
            footer: {
                icon_url: client.user.avatarURL,
                text: client.user.tag
            },

            fields: [
                {
                    name: '**__Contenu de la pub :__**',
                    value: question
                }
            ]
        }
    });
};

module.exports.help = {
    name: 'pub'
};