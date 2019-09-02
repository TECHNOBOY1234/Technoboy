const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();
 
if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
    let answers = ["https://cdn.discordapp.com/attachments/578454052938055691/607191416254496788/images_1.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191421480468481/images_2.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191424630521856/images.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191454326063105/Ways-to-Upgrade-Your-PC-Gaming-Setup-16-680x434.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191457023000586/maxresdefault_1.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191461393334272/vonguru_images_hardware_top_setup_cover-889x500.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191467412291585/maxresdefault_2.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191469022904350/maxresdefault.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191478846095388/pc-portable-pour-le-gaming.jpg", "https://cdn.discordapp.com/attachments/578454052938055691/607191478846095388/pc-portable-pour-le-gaming.jpg"]
    let question = args.slice(1).join(" ")
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setImage(answers[Math.floor(Math.random() * answers.length)])
    message.channel.send(embed)
};
module.exports.help = {
    name: 'setup'
};