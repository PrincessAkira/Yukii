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
  category: 'Misc',
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
      .setThumbnail('https://camo.githubusercontent.com/03757a303777b6b2908fb8a64563d9c68d26ebfb/68747470733a2f2f692e696d6775722e636f6d2f4e3172374832472e706e67')
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
       message.channel.send(StatsEmbed)

  }


}