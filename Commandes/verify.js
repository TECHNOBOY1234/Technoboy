const Discord = require("discord.js");
const fs = require("fs");
const blacklist = JSON.parse(fs.readFileSync("./json/blacklist.json", "utf8"));

module.exports.run = (client, message, args) => {
    
if(blacklist[message.author.id]){
    return message.channel.send('**Vous êtes dans la liste noir du bot, donc vous ne pouvez pas utilisez le bot.**')
}
message.delete(message.author)

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:Moderator:604724491599216680> Vous ne pouvez pas utiliser cette commande\n\cordialement,\nle staff du bot!")
        var found = []
        message.guild.members.forEach(m => {
            if(blacklist[m.id] !== undefined) found.push("`" + m.user.tag + " | " + m.id + "` > " + blacklist[m.id].reason)
        })
        if(found.length === 0){
            let verifyon = new Discord.RichEmbed()
        
            .setColor("#36393f")
            .setDescription("**Aucun joueur de ce Discord n'est présent dans la liste noir !\n\n<:bouclier:605366430770266122> Votre serveur est sécurisé.**")

            message.channel.send(verifyon)
            return
        }
        let verifyno = new Discord.RichEmbed()

        .setColor("#36393f")
        .setDescription("**" + found.length + "joueurs blacklisté(s) :\n\n- " + found.join("\n- ") + "**")

        message.channel.send(verifyno)
    
};
module.exports.help = {
    name: 'verify'
};