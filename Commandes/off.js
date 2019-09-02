const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.channel.send('**Je vais m\'éttaindre**').then(msg => {
    setTimeout(() => {
        msg.edit(':radio_button: ')
    },1000);
    setTimeout(() => {
        msg.edit(':radio_button: :radio_button: ')
    },2000);
    setTimeout(() => {
        msg.edit(':radio_button: :radio_button: :radio_button: ')
    },3000);
    setTimeout(() => {
        msg.edit(':radio_button: ')
    },4000);
    setTimeout(() => {
        msg.edit(':radio_button: :radio_button: ')
    },5000);
    setTimeout(() => {
        msg.edit(':radio_button: :radio_button: :radio_button: ')
    },6000);
    setTimeout(() => {
        msg.edit('**Je sui off.**')
    },7000);
    console.log(`${message.author.tag} [ ${message.author.id} ] a étaint le bot TECNOBOT.`);
    setTimeout(() => {
        client.destroy()
    },10000);
})
};
module.exports.help = {
    name: 'off'
};