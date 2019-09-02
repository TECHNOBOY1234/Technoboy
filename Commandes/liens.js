const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    message.delete();

    message.channel.send({
        embed: {
            color: 0x5de795,
            description: '**Voici les différent lien de <@602588181526741002>**',

            fields: [
                {
                    name: 'Serveur support :',
                    value: '[**Clique ici**](https://discord.gg/325HAYG)',
                    inline: true
                },
                {
                    name: 'Site web :',
                    value: '[**Clique ici**](https://technoboy-official.webnode.fr)',
                    inline: true
                },
                {
                    name: 'Invite le bot :',
                    value: '[**Clique ici**](https://discordapp.com/oauth2/authorize?client_id=602588181526741002&scope=bot&permissions=1341644233)',
                    inline: true
                },
                {
                    name: 'Me faire un dons',
                    value: '[**Clique ici**](https://technoboy-official.webnode.fr/dons/)'
                }
            ]
        }
    })
};
module.exports.help = {
    name: 'liens'
};