const Discord = require('discord.js')
const xtorrent = require('xtorrent')

module.exports = {

  description: 'Null',
  name: 'torrent',
  category: 'Misc',
  guildOnly: true,

  async execute (yukii, message, args) {
    xtorrent.search({ query: args }).then(data => {
      console.log(data);
      const Toorent = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle(':negative_squared_cross_mark: **Here is what i found** :negative_squared_cross_mark:')
        .addField(`Title`, `***${data.seeders}***`)

      message.channel.send(Toorent);
    });
    }
  }