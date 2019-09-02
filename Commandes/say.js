const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    message.delete();

    let msg = message.content.split(' ')
    msg.shift()
    let question = msg.join(' ')

    message.channel.send(question)
};

module.exports.help = {
    name: 'say'
};