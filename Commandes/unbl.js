const Discord = require("discord.js");
const fs = require("fs");
const blacklist = JSON.parse(fs.readFileSync("./json/blacklist.json", "utf8"));

module.exports.run = (client, message, args) => {
    
    if(message.author.bot) return;
        message.delete(message.author);
        let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
if (Staff.includes(message.author.id)) {

    let args = message.content.split(" ").slice(1);
    const iduser = args[0]
const id = args[0]
if(!id) return message.channel.send("**Merci de mettre un id d'utilisateur.**")

let bl = client.channels.get('614892359930478606');
    let blacklist1 = new Discord.RichEmbed()
    .setTitle(`:outbox_tray: **UNBLACKLIST**`)
    .setDescription(`Retrait par : ${message.author.tag}`)
    .addField(`ID:`, `${id}`)
    .addField("Raison:", "**" + args.join(" ").slice(18) + "**")
    .setColor("#36393f")
    .setFooter(`UnBlackListed | Votre protection, notre protecion ! V 1.2`)
    .setTimestamp();
    bl.send(blacklist1);

if (blacklist[iduser]) {
delete blacklist[iduser];
if (message.member.nickname === null) {
message.channel.send(`🔴 **ID** ` + '"' + id + '"' + `A bien été UnBlackList :wink:`).then(message => message.delete(5000));    
}else{
    var embedbl = new Discord.RichEmbed()
    .setTitle(":outbox_tray: Succès !")
    .setColor("#36393f")
    .setDescription(`**🕯ID** ` + '"' + id + '"' + `**a bien été unblacklisté !**`)
    .setTimestamp()
    .setFooter("© 2018-2019 TECHNOBOT", client.user.displayAvatarURL)
    message.channel.send(embedbl).then(message => message.delete(5000));
}
fs.writeFile("./json/blacklist.json", JSON.stringify(blacklist), (err) => { if (err) console.error(err);});
var channel = client.channels.find('id', '614892359930478606')
channel.setName(`Utilisateurs blacklist : ${Object.keys(blacklist).length}`)
}else{
message.channel.send(`🛡 [ERROR]: Cet **ID** n'est pas dans la BlackList du bot`).then(message => message.delete(2000));
}
}else{
message.channel.send(`:octagonal_sign: Désolé mais tu n'est pas du staff ${message.author} !`).then(message => message.delete(2000));


}
};

module.exports.help = {
    name: 'unbl'
};