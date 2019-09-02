const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:", "Je sais pas...", "Prout", "<a:NON:603917166818885682>"]
let msg = message.content.split(' ')
    msg.shift()
    let question = msg.join(' ')
let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("RABDOM")
    .setTitle("réponse: "+answers[Math.floor(Math.random() * answers.length)])
    .setDescription("question: "+question)
message.channel.send(embed)
};
module.exports.help = {
    name: '8ball'
};