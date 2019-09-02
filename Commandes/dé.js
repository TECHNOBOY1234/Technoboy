const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
let answers = ["1, éssaye encore", "2, éssaye encore", "3, éssaye encore", "4, éssaye encore", "5, éssaye encore", "6, bien joué !!"]
let question = args.slice(1).join(" ")
let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("#0FDC88")
    .setTitle(answers[Math.floor(Math.random() * answers.length)])
    .setTimestamp()
message.channel.send(embed)
};
module.exports.help = {
    name: 'dé'
};