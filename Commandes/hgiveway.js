const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    message.delete();

        let embed = new Discord.RichEmbed()
            .setTitle(":tada: **__GIVEWAY explication :__** :tada:")
            .setDescription("**Pour commencer un giveway faite** ``>giveway {votre giveway}`` **et pour le finir faite** ``>winner {mentionner un membre}`` **.**")
            .addField(":warning: **__ATTENTION !__** :warning:", "**Le bot ne désigne pas un membre au hazard, il faut le désignez soit même !**")
        message.channel.send(embed)
};

module.exports.help = {
    name: 'hgiveway'
};