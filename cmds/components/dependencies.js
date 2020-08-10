const Discord = require('discord.js');
const {
  dependencies
} = require('./../../package.json')

module.exports = {

  name: 'dependencies',
  description: 'null',
  category: 'Information',
  guildOnly: true,

  execute(message, yukii) {
    const StatsEmbed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setThumbnail('https://camo.githubusercontent.com/03757a303777b6b2908fb8a64563d9c68d26ebfb/68747470733a2f2f692e696d6775722e636f6d2f4e3172374832472e706e67')
      .setTitle(':wrench:  **Dependencies** :wrench:')
      .addField('**DiscordJS**', `**${dependencies['discord.js']}**`)
      .addField('**Moment**', `**${dependencies.moment}**`)
      .addField('**Moment-duration-format**', `**${dependencies['moment-duration-format']}**`)
      .addField('**Eslint**', `**${dependencies.eslint}**`)
      .addField('**Torrent-Grabber**', `**${dependencies["torrent-grabber"]}**`)
      .addField('**Standard**', `**${dependencies.standard}**`);

        return yukii.channel.send(StatsEmbed)
  }

}