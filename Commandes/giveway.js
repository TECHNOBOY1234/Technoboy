const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    message.delete();

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:NON:603917166818885682> Ta pas les permes :rage:")
if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
    let answers = ["1, éssaye encore", "2, éssaye encore", "3, éssaye encore", "4, éssaye encore", "5, éssaye encore", "6, bien joué !!"]
    let msg = message.content.split(' ')
    msg.shift()
    let question = msg.join(' ')
    let embed = new Discord.RichEmbed()
        .setColor("#0FDC88")
        .setAuthor(message.author.tag)
        .setTitle(question + ", *pour participer, appuyez sur :tada:*")
    message.channel.send(embed)
    .then(function (message) {
        message.react("🎉")
              })
};

module.exports.help = {
    name: 'giveway'
};