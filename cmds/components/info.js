const Discord = require('discord.js');
const {
  bot_info
} = require('./../../settings.json')
const {
  dependencies
} = require('./../../package.json')

module.exports = {

  name: 'info',
  description: 'Null',
  category: 'misc',
  guildOnly: true,

  execute(yukii, message) {

    const totalSeconds = (yukii.uptime / 1000) % 3600
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const ram = process.memoryUsage().heapUsed / 1024 / 1024


    const StatsEmbed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle(':wrench:  **Bot Statistics** :wrench:')
      .setThumbnail('https://i.imgur.com/SL1L9Bn.png')
      .addField('**Name**', `**${bot_info.Name}**`)
      .addField('**Author**', `**Yukii#6969**`)
      .addField('**Servercount**', `**${yukii.guilds.size} Servers**`)
      .addField('**DiscordJS**', `**${dependencies['discord.js']}**`)
      .addField('**NodeJS**', `**${bot_info.NodeJS}**`)
      .addField('**RAM Usage**', `**${ram} MB**`)
      .addField('**Uptime**', `** **`)
      .addField('**Days**', `**${days}**`)
      .addField('**Hours**', `**${hours}**`)
      .addField('**Minutes**', `**${minutes}**`)
      .addField('**Seconds**', `**${seconds}**`)
      .setFooter(`Requested by ${message.author.tag}`)
       message.channel.send(StatsEmbed)

  }


}