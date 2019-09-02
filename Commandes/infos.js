const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete();

    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600; 
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60);
    let uptime = `${hours} heures, ${minutes} minutes, ${seconds} secondes`;

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.tag)
        .setTitle("<:robot:605807067474821176> **__MES INFOS :__** <:robot:605807067474821176>")
        .addField("<:prenom:605807052320931862> | Prénom", "**TECHNOBOT**")
        .addField("<:id:605807021073104913> | **ID**", "**602588181526741002**")
        .addField("<:superieura:605810330563772435> | **Préfix par défault**", "**t/**")
        .addField("<:insta:605810975236423701> | **Instagramme du créateur**", "**destructor_du_71**")
        .addField("<:snap:605810633451110414> | **Snap du créateur**", "**loic_val56771**")
        .addField("<a:lowding2:603917000397422594> | **Latence**", "**"+client.ping+"**")
        .addField("<:createur:605806975594397701> | **Créateur**", "**<@574544938440851466>**")
        .addField("<:createur:605806975594397701> | **Date de création du bot**", "**26 juin 2018**")
        .addField("<:javascript:605809323553325056> | **Language**", "**JavaScript**")
        .addField("<:version:605807133874978835> | **Version**", "**2.0.5**")
        .addField("🎰 | Commandes", "**67**")
        .addField("<a:givefun:603916686252572672> | **Je suis sur**", message.client.guilds.size + " **serveurs**")
        .addField("<:uptime:605807096939937794> | **Uptimes**", "**"+uptime+"**")
        .addField("<:hbergement:605807006430920838> | **Hébergement**", "**Non hébergé pour le moment**")
        .setFooter(message.author.tag, "https://cdn.discordapp.com/attachments/603765758970953749/605845593646039041/ppdemonbot.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/603765758970953749/605845593646039041/ppdemonbot.png")
        .setImage("https://cdn.discordapp.com/attachments/578454052938055691/606160248889278464/GLITCHO_GIF_20190731_182212.gif")
        .setTimestamp()
    message.channel.send(embed)
};

module.exports.help = {
    name: 'infos'
};