const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();
message.channel.send('**Le compte à rebour vas commencer !!**').then(msg => {
    setTimeout(() => {
        msg.edit('**10**');
    },1000);
    setTimeout(() => {
        msg.edit('**9**')
    },3000);
    setTimeout(() => {
        msg.edit('**8**')
    },5000);
    setTimeout(() => {
        msg.edit('**7**')
    },7000);
    setTimeout(() => {
        msg.edit('**6**')
    },9000);
    setTimeout(() => {
        msg.edit('**5**')
    },11000);
    setTimeout(() => {
        msg.edit('**4**')
    },13000);
    setTimeout(() => {
        msg.edit('**3**')
    },15000);
    setTimeout(() => {
        msg.edit('**2**')
    },17000);
    setTimeout(() => {
        msg.edit('**1**')
    },19000);
    setTimeout(() => {
        msg.edit('**0**')
    },21000);
    })
};
module.exports.help = {
    name: 'compte-a-rebour'
};