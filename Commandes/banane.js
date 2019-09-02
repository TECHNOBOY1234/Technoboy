const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

message.delete();
 
if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
    let answers = ["-| :banana: |-" + "\n" + "-| :lemon: |-" + "\n" + "-| :banana: |-", "-| :lemon: |-" + "\n" + "-| :lemon: |-" + "\n" + "-| :tangerine: |-", "-| :tangerine: |-" + "\n" + "-| :lemon: |-" + "\n" + "-| :banana: |-", "-| :banana: |-" + "\n" + "-| :banana: |- **GG, tu a gagner la partie !**" + "\n" + "-| :banana: |-", "-| :banana: |-" + "\n" + "-| :kiwi: |-" + "\n" + "-| :lollipop: |-","-| :doughnut: |-" + "\n" + "-| :beer: |-" + "\n" + "-| :birthday: |-","-| :green_apple: |-" + "\n" + "-| :green_apple: |-" + "\n" + "-| :beer: |-","-| :birthday: |-" + "\n" + "-| :green_apple: |-" + "\n" + "-|  :doughnut: |-"]
    let question = args.slice(1).join(" ")
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setTitle(answers[Math.floor(Math.random() * answers.length)])
    message.channel.send(embed)
};
module.exports.help = {
    name: 'banane'
};