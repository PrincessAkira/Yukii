const {
  dependencies
} = require('./../../package.json')

module.exports = {

  name: 'dependencies',
  description: 'null',
  category: 'Information',

  execute(message, yukii) {
    const StatsEmbed = new yukii.MessageEmbed()
      .setColor('#ff0000')
      .setTitle(':wrench:  **Dependencies** :wrench:')
      .addField('**DiscordJS**', `**${dependencies['discord.js']}**`)
      .addField('**Moment**', `**${dependencies.moment}**`)
      .addField('**Moment-duration-format**', `**${dependencies['moment-duration-format']}**`)
      .addField('**Eslint**', `**${dependencies.eslint}**`)
      .addField('**Magnet-Link**', `**${dependencies['magnet-link']}**`)
      .addField('**Standard**', `**${dependencies.standard}**`)

    message.channel.send(StatsEmbed)
  }

}