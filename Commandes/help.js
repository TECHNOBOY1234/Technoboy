const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.channel.send({
    embed: {
        color: 0xc50e11,
        author: message.author.name,
        title: '**Choisissez votre option**',
        fields: [ 
        {  
        name: '**__Opptions possibles__**',
        value: "```css" + "\n" + "pour voir la liste des commandes ici  [ t/commands ]" + "\n" + "```" + "\n" + "```css" + "\n" + "pour voir la liste des commandes en mp  [ t/aide ]" + "\n" + "```",
        }, {
            name: '**De l\'aide pour ton bot?**',
            value: 'si tu veut commencer ton bot, [** ici**](https://discordapp.com/developers/applications/) pour créer ton application, et [**clique ici**](https://www.youtube.com/channel/UCzYSf-VLGKlqmnT6_E3hAXw?view_as=subscriber) pour voir mes conseil sur ma chaîne !'
        }, {
        name: '**invite le bot**',
        value: "[**Clique ici**](https://discordapp.com/oauth2/authorize?client_id=602588181526741002&scope=bot&permissions=1341644233)",
        inline: true
        }, {    
        name:'**site web**',
        value: '[**Clique ici**](https://technoboy-official.webnode.fr)',
        inline: true,
        }, {
        name: '**support**',
        value: '[**Clique ici**](https://discord.gg/brdxvN)',
        inline: true
        }],
        thumbnail: {
        url: message.client.iconURL
        },
        footer: {
        text: '©Bot By TECHNOBOY',
}}});
};

module.exports.help = {
    name: 'help'
};