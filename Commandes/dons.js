const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("**__Comment me soutenir ?__**", "**Il vous suffit de me faire un dons en [cliquant ici](https://www.paypal.me/givemeformyentrepris)**" + "\n" + "J'accepte tout somme donné !")
        .setTimestamp()
    message.channel.send(embed)
};

module.exports.help = {
    name: 'dons'
};