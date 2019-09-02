const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

 message.delete();
 
 if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
     let answers = ["https://cdn.discordapp.com/attachments/578454052938055691/607180536208818176/anim1.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180538683588619/anim4.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180539077722112/anim3.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180570878803969/anim5.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180570878803969/anim5.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180617624322058/anim2.gif", "https://cdn.discordapp.com/attachments/578454052938055691/607180697664356362/anim6.gif"]
     let question = args.slice(1).join(" ")
     let embed = new Discord.RichEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL)
         .setColor("RANDOM")
         .setImage(answers[Math.floor(Math.random() * answers.length)])
     message.channel.send(embed)
};
module.exports.help = {
    name: 'anime'
};