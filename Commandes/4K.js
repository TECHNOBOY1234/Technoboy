const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send('**Vous ne pouvez pas faire cette commande ici ! Veuillez la faire dans un salon NSFW !**');
  }
};
module.exports.help = {
    name: '4K'
};