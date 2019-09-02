module.exports.run = (client, message, args) => {
    if (!args.join(' ')) { return message.channel.send({
        embed: {
            color: 0xe43333,
            name: `Veuillez indiquez un rôle :warning:`
        }}); }
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return message.channel.send({
        embed: {
            color: 0xe43333,
            name: `Vous ne pouvez pas faire cette commande :warning:`
        }}); }
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send({
        embed: {
            color: 0xe43333,
            name: `Je ne peut pas :warning:`
        }}); }
        message.delete();

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

    if (!role) { return message.channel.send({
        
        embed: {
            color: 0xe43333,
            name: `Ce rôle existe pas :warning:`
        }
    }); }
    if (!member.roles.has(role.id)) { return message.channel.send({
        embed: {
            color: 0xe43333,
            name: `Vous n'avez pas ce rôle :warning:`
        }
    }); }
    
        member.removeRole(role.id)
            .then(() => message.channel.send({
                embed: {
                    color: 0xe43333,
                    name: `Vous avez désormais plus le role ${role.toString()}`
                }}))
            .catch(console.error);
};

module.exports.help = {
    name: 'delrole'
};