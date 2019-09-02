const Discord = require("discord.js");
const { get } = require("https");
module.exports.run = (client, message, args) => {

    if (!message.channel.nsfw) {
        return message.channel.send({
            embed: {
                color: 0x921212,
                title: `${message.author.tag} vous ne pouvez pas faire cette commande ici ! Veuillez la faire dans un salon NSFW !`
            }
        });
    }

get("https://neko-love.xyz/api/v1/neko", (res) => {
    const { statusCode } = res;
    if (statusCode !== 200) {
        return message.channel.send({
            embed: {
                color: 0x921212,
                title: 'Une erreur est survenure avec l\'API'
            }
        });
    }

    res.setEncoding("utf8");
    let rawData = '';

    res.on("data", (chunk) => {
        rawData += chunk;
    });

    res.on("end", () => {
        try {
            const parsedData = JSON.parse(rawData);
            message.channel.send({
                embed: {
                    color: 0xf825db,
                    author: {
                        name: `Demandé par ${message.author.tag}`,
                        url: "https://neko-love.xyz/api/v1/neko",
                    },
                    image: parsedData
                }
            });
        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (err) => {
    console.error(err.message);
});
};

module.exports.help = {
    name: 'neko'
};