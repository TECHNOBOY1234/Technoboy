const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();
 
if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
    let answers = ["https://cdn.discordapp.com/attachments/578454052938055691/606123076186537987/rip1.gif", "https://cdn.discordapp.com/attachments/578454052938055691/606122946574024708/rip4.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606123043449864233/rip2.gif", "https://cdn.discordapp.com/attachments/578454052938055691/606122963854426113/rip8.png", "https://cdn.discordapp.com/attachments/578454052938055691/606122951015661578/rip6.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606122951133364235/rip7.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606122948650205195/rip5.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/606122946234286113/rip3.png"]
    let question = args.slice(1).join(" ")
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setImage(answers[Math.floor(Math.random() * answers.length)])
    message.channel.send(embed)
};
module.exports.help = {
    name: 'rip'
};