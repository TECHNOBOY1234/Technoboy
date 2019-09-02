const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.channel.send({
    embed: {
        color: 0x36393f,
        author: message.author.name,
        title: '**__Voici les commandes de TECHNOBOT__**',
        description: 'Il y a au total **__67__** commandes.',
        fields: [ 
            {  
            name: '<a:lowding2:603917000397422594>Modérations (*22*)',
            value: "```fix" + "\n" + "sondage," + "\n" + "annonce," +  "\n" + "miseajoure," + "\n" + "kick," + "\n" + "ban," + "\n" + "clear," + "\n" + "mute," + "\n" + "unmute," + "\n" + "warn," + "\n" + "unwarn," + "\n" + "infractions," + "\n" + "punition," + "\n" + "bl," + "\n" + "unbl," + "\n" + "verify," + "\n" + "reset," + "\n" + "giveway," + "\n" + "winner," + "\n" + "hgiveway," + "\n" + "addrole," + "\n" + "delrole," + "\n" + "off." + "\n" + "```",
            inline: true   
            }, {
            name: '<a:lowding2:603917000397422594>Plus (*27*)',
            value: "```fix" + "\n" + "tableau," + "\n" + "creats-log," + "\n" + "TECHOBOT," + "\n" + "level," + "\n" + "serveur," + "\n" + "myID," + "\n" + "IDserver" + "\n" + "IDchannel" + "\n" + "IDowner," + "\n" + "owner," + "\n" + "avatar," + "\n" + "dons," + "\n" + "ytb," + "\n" + "support," + "\n" + "invite," + "\n" + "ping," + "\n" + "server-membre," + "\n" + "infos," + "\n" + "userinfos," + "\n" + "serverinfos," + "\n" + "uptime," + "\n" + "siteweb," + "\n" + "say," + "\n" + "report," + "\n" + "compte-a-rebour," + "\n" + "creatChannel," + "\n" + "ArAna" + "\n" + "```",
            inline: true
            }, {    
            name: '<a:lowding2:603917000397422594>Jeux (*9*)',
            value: "```fix" + "\n" + "pêche," + "\n" + "anime," + "\n" + "banane," + "\n" + "dé," + "\n" + "rip," + "\n" + "roulette," + "\n" + "smoke," + "\n" + "setup," + "\n" + "8ball." + "\n" + "```",
            inline: true
            }, {
            name: '<a:lowding2:603917000397422594>Inter-server (*3*)',
            value: "```fix" + "\n" + "t/m {message}" + "\n" + "t/help-inter-server," + "\n" + "t/Creatinter-server" + "\n" + "```",
            inline: true
            }, {
            name: '<a:lowding2:603917000397422594>Help (*5*)',
            value: "```fix" + "\n" + "help-logs," + "\n" + "help-inter-pub," + "\n" + "help-staff," + "\n" + "aide," + "\n" + "commands" + "\n" + "```",
            inline: true
            }, {
            name: '<a:lowding2:603917000397422594>NSFW (*3*)',
            value: "```fix" + "\n" + "neko" + "\n" + "4K," + "\n" + "ass" + "\n" + "```",
            inline: true
            }],
        thumbnail: {
        url: message.client.iconURL
        },
        footer: {
        text: '©Bot By TECHNOBOY • TECHNOBOT • t/liens',
}}});
};

module.exports.help = {
    name: 'commands'
};