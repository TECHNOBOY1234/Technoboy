const Discord = require("discord.js");


module.exports.run = (client, message, args) => {

    if(message.author.bot) return;
        let Staff = ["574544938440851466"];
            if (Staff.includes(message.author.id)) {
                
    message.channel.send({
        embed: {
            color: 0x36393f,
            title: 'Comment ajouté son bot sur le serveur ?',

            fields: [
                {
                    name: '**Qu\'elle est la commande pour ajouter son bot ?**',
                    value: '**La commande pour ajouter son est** ``t/addbot {lien d\'invitation votre bot}``\n \n**__Exemple :__** t/addbot https://lien.dinvitation.de.votre.bot.fr/  \n \n ───────────────────────────────────'
                },
                {
                    name: '\n **Où devons nous faire la commande ?**',
                    value: '**Faite la commande dans le salon <#616972514891005962>** \n \n ───────────────────────────────────'
                },
                {
                    name: '\n **Comment avoir l\'invite de notre bot ?**',
                    value: '**Pour avoir l\'invite de votre bot il vous faut son** ``ID`` **et ensuite [cliqué ici](https://discordapi.com/permissions.html#1341644233) pour créé son invite** \n \n ───────────────────────────────────'
                },
                {
                    name: '\n **On va devoir attend combien de temps ?**',
                    value: '**Vous devez attendre 10 ou 20 minutes, sinon mentionnez les personnes suivantes :** \n \n <@522827861204402186> \n <@533003086755659796> \n <@574544938440851466> \n \n ───────────────────────────────────'
                }
            ],
            thumbnail: {
                url: 'https://cdn.discordapp.com/avatars/574544938440851466/4b0c4432892d181285e08f6a696b0f2e.png?size=2048',
            },
            timestamp: new Date(),
	        footer: {
		        text: 'Add bot by TECHNOBOY',
		        icon_url: 'https://cdn.discordapp.com/avatars/574544938440851466/4b0c4432892d181285e08f6a696b0f2e.png?size=2048',
	        },
        }
     })            
   }   
};

module.exports.help = {
    name: 'expbot'
};