const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
    
    message.delete();

    let msg = message.content.split(' ')
    msg.shift()
    let invite = msg.join(' ')

    message.channel.send({
        embed: {
            color: 0x36393f,
            author: {
                name: 'Invite ton Bot',
                icon_url: 'https://media.discordapp.net/attachments/603790061061931010/616970137421217804/Moderator_Badge_new.png?width=503&height=499',
                url: 'https://discord.gg/aVkJ9cm',
            },
            fields: [
                {
                    name: '**Invitation du bot :**',
                    value: `[**[ appuye ici ]**](${invite})`
                },
                {
                    name: 'Infos du membre :',
                    value: `**__ID du membre :__** ${message.author.id} \n **__Membre :__** ${message.author.tag}`
                }],

                footer: {
                    text: 'Add Bor by TECHNOBOY',
                   incon_url: message.author.avatarURL,
                },
        }
    })

    let embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setDescription(`<@${message.author.id}> **attendez que** <@${message.guild.ownerID}> **valide votre bot !**`)
        .setFooter('Add Bor by TECHNOBOY', message.author.avatarURL)
    message.channel.send(embed)
};

module.exports.help = {
    name: 'addbot'
};