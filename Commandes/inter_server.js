const Discord = require("discord.js");

var interserverCooldown = new Set();

module.exports.run = (client, message, args) => {

    if (message.channel.name === 'inter-serveur' && !message.author.bot) {
        message.delete();
        if (interserverCooldown.has(message.author.id)) return message.channel.send('**Vous ne pouvez utiliser l\'inter-pub qu\'une fois toutes les 10 secondes**.');
        if(inter[message.author.id]){
            return message.channel.send('**Vous êtes punis, vous ne pouvez donc pas utiliser l\'inter-server.**')
        }
        if(message.author.id);
          message.guild.channels.filter(c => c.type === "text").random().createInvite().then(invite => {let lien = invite.code;
            let msg = message.content.split(' ')
            msg.shift()
            let question = msg.join(' ')
            const embed = {
                color: 0x279ec0,
                footer: {
                    icon_url: client.user.avatarURL,
                    text: client.user.tag
                },
                author: {
                    name: 'INTER SERVEUR',
                    url: "https://discord.gg/v5cBvdK",
                    icon_url: 'https://cdn.discordapp.com/avatars/602588181526741002/40fc50b3baa72b27030503bc0a675479.png?size=2048'
                },
                "fields": [
                    {
                        "name": "**__Contenu__**<:bouclier:605366430770266122>",
                        "value": "▷ **" + question + "**",
                    },
                    {
                        "name": '\u200B',
                        "value": '\u200B'
                    },
                    {
                        "name": "**__Auteur__**<:bouclier:605366430770266122>",
                        "value": "╭▷**"+message.author.tag+"**" + "\n" +  "╰▷**"+message.author.id+"**",
                        "inline": true
                    },
                    {
                        "name": "**__Depuis__**<:bouclier:605366430770266122>",
                        "value": "╭▷**"+message.guild.name+"" + "\n" +  "┊▷**"+message.guild.id+"**" + "\n" +  "╰▷**"+invite,
                        "inline": true
                    }
                ]
            };
            interserverCooldown.add(message.author.id);
            setTimeout(function () {
                interserverCooldown.delete(message.author.id);
            }, 10000);
            client.channels.forEach(channel => {
                if(channel.name === 'inter-serveur' && channel.type === 'text' && channel.id !== message.channel.id) {
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
            author: {
                name: 'INTER SERVEUR',
                url: "https://discord.gg/v5cBvdK",
                icon_url: 'https://cdn.discordapp.com/avatars/602588181526741002/40fc50b3baa72b27030503bc0a675479.png?size=2048'
            },

            fields: [
                {
                    name: '**__Contenu__**<:bouclier:605366430770266122>',
                    value: "▷ **" + question + "**"
                },
                {
                    name: '**__Auteur__**<:bouclier:605366430770266122>',
                    value: "╭▷**"+message.author.tag+"**" + "\n" +  "╰▷**"+message.author.id+"**",
                    inline: true
                },
                {
                    name: '**__Depuis__**<:bouclier:605366430770266122>',
                    value: "╭▷**"+message.guild.name+"**" + "\n" +  "╰▷**"+message.guild.id+"**",
                    inline: true
                }
            ]
        }
    });
};

module.exports.help = {
    name: 'm'
};