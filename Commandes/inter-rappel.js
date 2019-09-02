const Discord = require("discord.js");

var interserverCooldown = new Set();

module.exports.run = (client, message, args) => {
    
    let Staff = ["574544938440851466"];
    if (Staff.includes(message.author.id)) {
        let args = message.content.split(" ").slice(1);
        if (message.channel.name === 'inter-serveur' && !message.author.bot) {
            message.delete();
            if (interserverCooldown.has(message.author.id)) return message.channel.send('**Vous ne pouvez utiliser l\'inter-pub qu\'une fois toutes les 10 secondes**.');
            if(message.author.id);
              message.guild.channels.filter(c => c.type === "text").random().createInvite().then(invite => {let lien = invite.code;
                let msg = message.content.split(' ')
                msg.shift()
                let question = msg.join(' ')
                const embed = {
                    color: 0x279ec0,
                    "fields": [
                        {
                            "name": "INTER RAPPEL",
                            "value": '**__Bonjour/Bonsoir.__**' + '\n' +  '*Rappelle des règles de l\'inter server:*' + '\n' + '\n' + ':arrow_forward: **Les insultes ne sont pas accepté !**' + '\n' + '\n' + ':arrow_forward: **Les pubs ne sont pas accepté !**' + '\n' + '\n' + ':arrow_forward: **Les provocations ne sont pas accepté !**' + '\n' + '\n' + '*Si une de ces règles ne sont pas appliquer, nous possèderons a une punitions qui vous interdira de parler dans l\'inter serveur.*' + '\n' + '\n' + '**__Cordialement :__** Le fondateur',
                        },
                        {
                            "name": '─────────────────────────────────',
                            "value": '[**support du bot ici**](https://discord.gg/v5cBvdK)'
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
                fields: [
                    {
                        name: 'INTER RAPPEL',
                        value: '**__Bonjour/Bonsoir.__**' + '\n' +  '*Rappelle des règles de l\'inter server:*' + '\n' + '\n' + ':arrow_forward: **Les insultes ne sont pas accepté !**' + '\n' + '\n' + ':arrow_forward: **Les pubs ne sont pas accepté !**' + '\n' + '\n' + ':arrow_forward: **Les provocations ne sont pas accepté !**' + '\n' + '\n' + '*Si une de ces règles ne sont pas appliquer, nous possèderons a une punitions qui vous interdira de parler dans l\'inter serveur.*' + '\n' + '\n' + '**__Cordialement :__** Le fondateur',
                    },
                    {
                        name: '─────────────────────────────────',
                        value: '[**support du bot ici**](https://discord.gg/v5cBvdK)'
                    }
                ]
            }
        });
        }else{
            message.channel.send(`<:bouclier:605366430770266122> Désolé mais tu n'est pas du fondateur du bot ${message.author} !`)}
};

module.exports.help = {
    name: 'rap'
};