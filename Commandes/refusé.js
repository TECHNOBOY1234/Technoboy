const Discord = require("discord.js");


module.exports.run = (client, message, args) => {

    if(message.author.bot) return;
        let Staff = ["574544938440851466", "533003086755659796", "522827861204402186"];
            if (Staff.includes(message.author.id)) {
                
                
                //var / let
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                let tte = args[0]
                
                const user = client.users.get(`${tte}`);
                
                
                //reply
                message.delete()
                message.channel.send({
                    embed: {
                        color: 0xd12a2a,
                        description: `<@${message.author.id}> **à refusé votre bot !**`,

                        image: {
                            url: 'https://cdn.discordapp.com/attachments/615917793933787137/616725650752929808/SEPARATOR.gif'
                        }
                    }
                })
                
                //embed mp
                var embedmp = new Discord.RichEmbed()
                .setTitle("**Bot refusé !!**")
                .setDescription("**Votre bot a été refusé....**")
                .setColor('RED')
                .setTimestamp()
                user.send(embedmp)
                
        }
};

module.exports.help = {
    name: 'botr'
};