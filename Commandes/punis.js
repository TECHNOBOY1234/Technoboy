const Discord = require("discord.js");
const fs = require('fs');
const inter = JSON.parse(fs.readFileSync("./json/inter.json", "utf8"));
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

let bl = client.channels.get('617691401294970880');
let blacklist1 = new Discord.RichEmbed()
        .setTitle(`<a:Sirne:603917575251820545> **INTER PUNIS** <a:Sirne:603917575251820545>`)
        .setDescription(`<:bouclier:605366430770266122> Ajout par : ${message.author.tag}`)
        .addField(`ID:`, `${id}`)
        .addField("Raison:", "**" + args.join(" ").slice(18) + "**")
        .setColor("#36393f")
        .setFooter(`Inter Punis | Votre protection, notre fièrter ! V 1.2`)
        .setTimestamp();
    bl.send(blacklist1);

    if (inter[id]) {
        return message.channel.send("<:Moderator:604724426386440192> Erreur: **ID** déjà Punis ");
    }else{
    if (id.length === 0) {
        inter[id] = {"reason" : true, "date" : true, "author" : true};
    message.delete();
    
    }else{
//    inter[id] = {"reason" : "inter-Id: " + args.join(" ") + ". inter by: " + message.author.username};

    inter[id] = {"reason" : args.join(" ").slice(18), "date" : moment.utc(message.createdAt).format('LL'), "author" : message.author.tag};
    message.delete();
    var embedbl = new Discord.RichEmbed()
    .setTitle(":inbox_tray:  Succès !")
    .setColor("#36393f")
    .setDescription(`**<:Moderator:604724426386440192>  ID** ` + '"' + id + '"' + `**a bien été punis !**`)
    .setTimestamp()
    .setFooter("© 2018-2019 Blextaz", client.user.displayAvatarURL)
    message.channel.send(embedbl)
    }
    fs.writeFile("./json/inter.json", JSON.stringify(inter), (err) => { if (err) console.error(err);});
    var channel = client.channels.find('id', '617692969943826442')
    channel.setName(`┊▷-User Punis: ${Object.keys(inter).length}`)
    }
    console.log(`[inter] "${id}" a été inter! Par: ${message.author.username}. Raison: ${args}`)
}else{
    message.channel.send(`<:bouclier:605366430770266122> Désolé mais tu n'est pas du staff ${message.author} !`)}
};

module.exports.help = {
    name: 'punition'
};