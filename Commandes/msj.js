const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    let Staff = ["522827861204402186", "574544938440851466", "585797058280030228"];
    if (Staff.includes(message.author.id)) {
        let args = message.content.split(" ").slice(1);
        message.delete();
        let on_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Mise à jour terminer !")
            .addField("J\'ai commancé ma surveillance dans ", client.guilds.size + " serveurs," + "\n" + client.channels.size + " channels," + "\n" + client.users.size + " utilisateurs.") 
        
        client.guilds.get("596020968707850240").channels.get("609342868850475054").send(on_embed)
        }else{
            message.channel.send(`<:bouclier:605366430770266122> Désolé mais tu n'est pas du staff ${message.author} !`)}
};

module.exports.help = {
    name: 'miseajoure'
};