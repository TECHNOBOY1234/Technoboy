const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();
    message.channel.send({
        embed: {
        color: 0x00AAFF,
        author: message.author.name,
        title: '<a:Dev:610449622476783616><a:Ev:610449642424893450><a:Ved:610449680199057409> | **__TECHNO DEVELOPPEMENT__**',
        description: 'Préfix de TECHNOBOT = t/',
        fields: [ 
        {  
        name: '**__Mes liens :__**',
        value: "**__Site web :__** https://technoboy-official.webnode.fr" + "\n" + "**__Invite :__ ** https://technoboy-official.webnode.fr/bot/" + "\n" + "__**Support :**__ https://discord.gg/325HAYG" + "\n" + "**__Dons :__** https://technoboy-official.webnode.fr/dons/",
        inline: true   
        }, {
        name: '__**Je suis sur :**__',
        value: "``" + message.client.guilds.size + " serveurs``," + "\n" + "``" + message.client.channels.size + "channels``," + "\n" + "``" + message.client.users.size+ " utilisateurs``.",
        inline: true
        }, {
        name: '────────────────────────────────────────',
        value: "<a:gyrorddf:610504033731608586><:ff:610503918325334047><:oo:610503945760014347><:nn:610503962239434766><:dd:610503981260865563><:aa:610503998717558784><a:gyrorddf:610504033731608586>"
        }, {
        name: '**__Mon fondateur :__**',
        value: "Mon créateur  est <@574544938440851466>" + "\n",
        inline: true
        }, {
        name: '**__Ma date de création :__**',
        value: "**26 juin 2018**",
        inline: true
        }],
        thumbnail: {
        url: message.client.iconURL
        },
        timestamp: new Date(),
        footer: {
        text: '©Bot By TECHNOBOY • 56 commandes',
    }}}).then(message => message.delete(20000));
};

module.exports.help = {
    name: 'TECHNOBOT'
};