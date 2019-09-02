const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas les permissions !'); }
    if (!args[0]) { return message.channel.send('Vous devez spécifier un nombre de messages à supprimer !'); }
    else if (isNaN(args[0])) { return message.channel.send('Veuillez spécifier un nombre !'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send({
                    embed: {
                        color: 0x9400d3,
                        description: `<:supprimer:605735485880664078> **${messages.size}** messages de **tout** le monde on été supprimé ! <:supprimer:605735485880664078>`
                    }
                }).then(message => message.delete(7000));
            });
};

module.exports.help = {
    name: 'clear'
};