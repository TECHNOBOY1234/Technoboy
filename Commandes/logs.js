const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();
if(message.author.id !== "574544938440851466") return message.channel.send("<a:NON:603917166818885682> Vous êtes qui pour vouloir afficher mes logs ?")
    message.channel.send('```fix'+'\n'+'C:\\Program node.js\\index.js\\node.exe --index.js'+'\n'+'```')
    message.channel.send('```diff'+'\n'+'- Debugger listening on ws://1.0.0.1:220/6f46-241-3db-918-3bc6c1a8'+'\n'+'```')
    message.channel.send('```diff'+'\n'+'- For help, see: https://nodejs.org/en/docs/inspector'+'\n'+'```')
    message.channel.send('```diff'+'\n'+'- Debugger attached.'+'\n'+'```')
    message.channel.send('```2 events oppérationnel !'+'```')
    message.channel.send('```'+'\n'+'Modération commandes chargé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'Inter-server commandes chargé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'Jeux commandes chargé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'Plus commandes chargé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'Help commandes chargé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'NSFW commandes chargé !'+'\n'+'```')
    message.channel.send('```cpp'+'\n'+'Total commande " 67 "'+'\n'+'```')
    message.channel.send('```'+'\n'+'blacklist.json armé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'database.json armé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'inter.json armé !'+'\n'+'```')
    message.channel.send('```'+'\n'+'warns.json armé !'+'\n'+'```')
    message.channel.send('```cpp'+'\n'+'Total JSON " 4 "'+'\n'+'```')
    message.channel.send('```inspection des logs.```').then(msg => {
        setTimeout(() => {
            msg.edit('```inspection des logs..```');
        },1000);
        setTimeout(() => {
            msg.edit('```inspection des logs...```')
        },3000);
        setTimeout(() => {
            msg.edit('```inspection des logs..```')
        },5000);
        setTimeout(() => {
            msg.edit('```inspection des logs.```')
        },7000);
        setTimeout(() => {
            msg.edit('```Les logs sont normals..```')
        },40000);
    })
};
module.exports.help = {
    name: 'logs'
};