const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    if (!message.guild) return
    let msg = message.content.split(' ')
    msg.shift()
    let question = msg.join(' ')

let embed2 = client.channels.get('607319189962620969');
let report = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`<a:Sirne:603917575251820545> **REPORT** <a:Sirne:603917575251820545>`)
        .setDescription(`<:bouclier:605366430770266122> Ecrit par : ${message.author.tag}`)
        .addField(`ID:`, message.author.id)
        .addField("Contenue :", "**" + question + "**")
        .setColor("RANDOM")
        .setFooter(`Report | Vos question, notre progression !`)
        .setTimestamp();
    embed2.send(report);
};

module.exports.help = {
    name: 'report'
};