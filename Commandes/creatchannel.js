const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send({
  embed: {
      color: 0x9400d3,
      description: `<@${message.author.id}> **Vous avez pas la perm gèrer les roles !**`
  }
});
let aicon = message.author.displayAvatarURL;
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription("**Le salon vient d'être crèe !**")
.setTimestamp()
.setFooter("salon crèe", aicon)
.addField("salon crèe par", `<@${message.author.id}>`);


message.guild.createChannel("Channel");
message.channel.send(embed);
};
module.exports.help = {
    name: 'creatChannel'
};