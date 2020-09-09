const Discord = require('discord.js')
const fs = require('fs')
const yukii = new Discord.Client({
  disableEveryone: true
})
yukii.commands = new Discord.Collection()
const {
  PREFIX,
  token,
} = require('./settings.json')

// /--- Connect-Path ---\ \\

yukii.login(token)

yukii.on('disconnect', () => {
  yukii.login(token)
})

// /--- Command Handler ---\ \\
// Credits to rikuwu \\

for (const file of fs.readdirSync('./cmds/components').filter(file => file.endsWith('.js'))) {
  yukii.commands.set(yukii.name, yukii)
  yukii.commands.set(require(`./cmds/components/${file}`).name, require(`./cmds/components/${file}`))
}

yukii

  .on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'DM') return
    const args = message.content.slice(PREFIX.length).split(/ +/)
    const cmd = args.shift().toLowerCase()
    const errormess = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle(':warning:  **Error** :warning:')
      .setDescription('**Please specify the Command and try again**')
      .setThumbnail('https://i.imgur.com/SL1L9Bn.png')
    if (!yukii.commands.has(cmd)) return
    try {
      yukii.commands.get(cmd).execute(yukii, message, args, errormess)
    } catch (err) {
      console.error(err)
      message.channel.send('```There was an error: ' + err + '```')
    }
  })

  .once('ready', () => {
    console.log(`Logged in as ${yukii.user.tag}!`)
    yukii.user.setActivity('Bot has been recoded ' + '| Prefix: -k');
    // yukii.user.setActivity('in ' + `${yukii.guilds.size} Servers ` + '| Prefix: -k')
  })