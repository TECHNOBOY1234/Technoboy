const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    message.delete();

    let msg = message.content.split(' ')
    msg.shift()
    let question = msg.join(' ')

    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#0FDC88")
            .setTitle(question)
            .setDescription("*répond avec ❌pour non, ou ✅pour oui*")
        message.channel.send(embed)
        .then(function (message) {
            message.react("❌")
            message.react("✅")
        })
};

module.exports.help = {
    name: 'sondage'
};