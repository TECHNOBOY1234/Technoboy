const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();
if(message.author.id !== "574544938440851466") return message.channel.send("<a:NON:603917166818885682> Vous êtes qui pour vouloir me redémarer ?")
message.channel.send('**Redémarrage**').then(msg => {
    setTimeout(() => {
        msg.edit('**[▇] 2%**' + '\n' + 'veuillez passientez..');
    },1000);
    setTimeout(() => {
        msg.edit('**[▇▇] 5%**' + '\n' + 'veuillez passientez.')
    },3000);
    setTimeout(() => {
        msg.edit('**[▇▇▇] 15%**'+ '\n' + 'veuillez passientez..')
    },5000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇] 20%**'+ '\n' + 'veuillez passientez...')
    },7000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇] 25%**'+ '\n' + 'veuillez passientez.')
    },9000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇] 30%**'+ '\n' + 'veuillez passientez..')
    },11000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇] 35%**'+ '\n' + 'veuillez passientez...')
    },13000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇] 40%**'+ '\n' + 'veuillez passientez.')
    },15000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇] 45%**'+ '\n' + 'veuillez passientez..')
    },17000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇] 50%**'+ '\n' + 'veuillez passientez...')
    },19000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇] 55%**'+ '\n' + 'veuillez passientez.')
    },21000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇] 60%**'+ '\n' + 'veuillez passientez..')
    },23000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇] 65%**'+ '\n' + 'veuillez passientez...')
    },25000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 70%**'+ '\n' + 'veuillez passientez.')
    },27000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 75%**'+ '\n' + 'veuillez passientez..')
    },29000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 80%**'+ '\n' + 'veuillez passientez...')
    },31000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 85%**'+ '\n' + 'veuillez passientez.')
    },33000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 90%**'+ '\n' + 'veuillez passientez..')
    },35000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 95%**'+ '\n' + 'veuillez passientez...')
    },37000);
    setTimeout(() => {
        msg.edit('**[▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇] 100%**<a:explosion:485070538977574943>'+ '\n' + 'Le téléchargement à pris fin, le bot va redémarrer !')
    },39000);
    console.log(`${message.author.tag} [ ${message.author.id} ] a redémarré le bot TECNOBOT.`);
    console.log(`Redémarrage..`);
    setTimeout(() => {
        client.destroy();
        client.login("NjAyNTg4MTgxNTI2NzQxMDAy.XTsptA.sOIaP-H0ioP5Osfg0m6ZcEXQmGc");
    },41000);
    setTimeout(() => {
        msg.edit('**opération redémarrage reussis avec succès...<a:valider:607208649286483988>**');
    },42000);
    })
};
module.exports.help = {
    name: 'reset'
};