const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

 message.delete();

 let embed = new Discord.RichEmbed()
     .setColor("#94AB48")
     .setTitle("**Clique ici**")
     .setDescription("**pour m'ajouter sur ton serveur.**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=602588181526741002&scope=bot&permissions=1341644233")
     .setTimestamp()
 message.channel.send(embed)
};
module.exports.help = {
    name: 'invite'
};