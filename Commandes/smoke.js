const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();
    message.channel.send('**Je m\'allume une clope**').then(msg => {
        setTimeout(() => {
            msg.edit('');
        },1000);
        setTimeout(() => {
            msg.edit(':smoking:')
        },3000);
        setTimeout(() => {
            msg.edit(':smoking: :cloud:')
        },5000);
        setTimeout(() => {
            msg.edit(':smoking:')
        },6000);
        setTimeout(() => {
            msg.edit(':smoking: :cloud:')
        },7000);
        setTimeout(() => {
            msg.edit(':smoking: :cloud: :cloud:')
        },8000);
        setTimeout(() => {
            msg.edit(':smoking: :cloud:')
        },9000);
        setTimeout(() => {
            msg.edit(':smoking:')
        },10000);
        setTimeout(() => {
            msg.edit('**Je l\'ai fini**')
        },11000);
        })
};
module.exports.help = {
    name: 'smoke'
};