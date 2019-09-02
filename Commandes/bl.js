const Discord = require("discord.js");
const fs = require("fs");
const blacklist = JSON.parse(fs.readFileSync("./json/blacklist.json", "utf8"));
const moment = require("moment");

module.exports.run = (client, message, args) => {
    
    if(message.author.bot) return;
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
    if (Staff.includes(message.author.id)) {
        let args = message.content.split(" ").slice(1);
        
const id = args[0]
const iduser = args[0]
const reason = message.content.split(" ").slice(18);
if(!id) return message.channel.send("**Merci de mettre un id d'utilisateur.**")

let bl = client.channels.get('617701141571960833');
let blacklist1 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`<a:Sirne:603917575251820545> **ADDBLACKLIST** <a:Sirne:603917575251820545>`)
        .setDescription(`<:bouclier:605366430770266122> Ajout par : ${message.author.tag}`)
        .addField(`ID:`, `${id}`)
        .addField("Raison:", "**" + args.join(" ").slice(18) + "**")
        .setColor("#36393f")
        .setFooter(`BlackListed | Votre protection, notre fièrter ! V 1.2`)
        .setTimestamp();
    bl.send(blacklist1);

    if (blacklist[id]) {
        return message.channel.send("<:Moderator:604724426386440192> Erreur: **ID** déjà blacklist ");
    }else{
    if (id.length === 0) {
    blacklist[id] = {"reason" : true, "date" : true, "author" : true};
    message.delete();
    
    }else{
//    blacklist[id] = {"reason" : "Blacklisted-Id: " + args.join(" ") + ". Blacklisted by: " + message.author.username};

    blacklist[id] = {"reason" : args.join(" ").slice(18), "date" : moment.utc(message.createdAt).format('LL'), "author" : message.author.tag};
    message.delete();
    var embedbl = new Discord.RichEmbed()
    .setTitle(":inbox_tray:  Succès !")
    .setColor("#36393f")
    .setDescription(`**<:Moderator:604724426386440192>  ID** ` + '"' + id + '"' + `**a bien été blacklisté !**`)
    .setTimestamp()
    .setFooter("© 2018-2019 Blextaz", client.user.displayAvatarURL)
    message.channel.send(embedbl)
    }
    fs.writeFile("./json/blacklist.json", JSON.stringify(blacklist), (err) => { if (err) console.error(err);});
    var channel = client.channels.find('id', '617693071861088257')
    channel.setName(`┊▷-User BlackList: ${Object.keys(blacklist).length}`)
    }
    console.log(`[BlackList] "${id}" a été blacklist! Par: ${message.author.username}. Raison: ${args}`)
}else{
    message.channel.send(`<:bouclier:605366430770266122> Désolé mais tu n'est pas du staff ${message.author} !`)}
};

module.exports.help = {
    name: 'bl'
};