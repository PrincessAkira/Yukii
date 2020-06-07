const Discord = require('discord.js')
const client = new Discord.Client()
const {
  PREFIX,
  bot_info,
  token
} = require('./settings.json')
const {
  dependencies
} = require('./package.json')

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('in ' + `${client.guilds.resolve.length} Servers ` + '| Prefix: -y')
})

client.login(token)

// this will reconnect the bot when it gets disconnected

client.on('disconnect', () => {
  client.login(token)
})

client.on('message', message => {
  if (message.content === PREFIX + 'test2') {
    message.channel.send('```' + 'This is just a test command' + '```')
  }
})

client.on('message', message => {
  if (message.content === PREFIX + 'dependencies') {
    const StatsEmbed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle(':wrench:  **Dependencies** :wrench:')
      .addField('**DiscordJS**', `**${dependencies['discord.js']}**`)
      .addField('**Moment**', `**${dependencies.moment}**`)
      .addField('**Moment-duration-format**', `**${dependencies['moment-duration-format']}**`)
      .addField('**Eslint**', `**${dependencies.eslint}**`)
      .addField('**Standard**', `**${dependencies.standard}**`)

    message.channel.send(StatsEmbed)
  }
})

client.on('message', message => {
  if (message.content === PREFIX + 'info') {
    const totalSeconds = (client.uptime / 1000) % 3600
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const ram = process.memoryUsage().heapUsed / 1024 / 1024

    const StatsEmbed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle(':wrench:  **Bot Statistics** :wrench:')
      .addField('**Name**', `**${bot_info.Name}**`)
      .addField('**Author**', '**Test123**')
      .addField('**Servercount**', `**${client.guilds.resolve.length} Servers**`)
      .addField('**DiscordJS**', `**${dependencies['discord.js']}**`)
      .addField('**NodeJS**', `**${bot_info.NodeJS}**`)
      .addField('**RAM Usage**', `**${ram} MB**`)
      .setDescription('**Uptime ::**')
      .addField('**Days**', `**${days}**`)
      .addField('**Hours**', `**${hours}**`)
      .addField('**Minutes**', `**${minutes}**`)
      .addField('**Seconds**', `**${seconds}**`)

    message.channel.send(StatsEmbed)
  }
})
