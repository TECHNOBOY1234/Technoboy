module.exports.run = (client, message, args) => {
    message.delete();
    if (!args.join(' ')) return message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Veuillez indiquez un rôle :warning:`
        }
    });
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Vous ne pouvez pas faire cette commande :warning:`
        }
    });
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) return message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Je ne peut pas :warning:`
        }
    });
    
    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

    if (!role) return message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Ce rôle existe pas :warning:`
        }});
    if (member.roles.has(role.id)) return message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Vous avez déja ce rôle :warning:`
        }
    });
    
        member.addRole(role.id)
            .then(()=> message.channel.send({
                embed: {
                    color: 0x49e63c,
                    description: `Vous avez désormais le role ${role.toString()}`
                }
            }))
            .catch(console.error);
};

module.exports.help = {
    name: 'addrole'
};