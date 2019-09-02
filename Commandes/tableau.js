const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();

        message.channel.send("```fix" + "\n" + "┌───────────────────────────┬────────────────────────┐" + "\n" + "│ Name                      │ id                     │" + "\n" + "├───────────────────────────┼────────────────────────┤" + "\n" + "│         "+message.author.username+"  │    "+message.author.id+" │" + "\n" + "└───────────────────────────┴────────────────────────┘" + "\n" + "```")
};

module.exports.help = {
    name: 'tableau'
};