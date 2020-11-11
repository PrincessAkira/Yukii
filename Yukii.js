const Discord = require('discord.js')
const fs = require('fs')
const cronJob = require('cron')
const snekfetch = require('snekfetch')
const msFix = require('ms')
const importcommands = require('cmds/components/nsfw.js');
importcommands.nsfw();
const yukii = new Discord.Client({
  disableEveryone: true
})
yukii.commands = new Discord.Collection()
const {
  PREFIX,
  APIKey,
  token,
} = require('./settings.json')

// /--- Connect-Path ---\ \\

yukii.login(token)

// /--- Command Handler ---\ \\
// Credits to rikuwu \\

for (const file of fs.readdirSync('./cmds/components').filter(file => file.endsWith('.js'))) {
  yukii.commands.set(yukii.name, yukii)
  yukii.commands.set(require(`./cmds/components/${file}`).name, require(`./cmds/components/${file}`))
}
yukii.on('message', message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'DM') return
  const args = message.content.slice(PREFIX.length).split(/ +/)
  const cmd = args.shift().toLowerCase()
  if (!yukii.commands.has(cmd)) return
  try {
    yukii.commands.get(cmd).execute(yukii, message, args)
  } catch (err) {
    console.error(err)
    message.channel.send('```There was an error: ' + err + '```')
  }
})

yukii.on('ready', async () => {
  yukii.user.setActivity('Bot recode! ' + '| -k help')
  console.log(`Logged in as ${yukii.user.tag}!`)
  snekfetch.post(`https://space-bot-list.xyz/api/bots/691622066713133155`)
    .set('Authorization', APIKey)
    .send({ guilds: yukii.guilds.cache.size, users: yukii.users.cache.size })
    .then(req => req.body)
  // yukii.user.setActivity('in ' + `${yukii.guilds.size} Servers ` + '| Prefix: -k')
  if (fs.existsSync('./restartMessage')) {
    let restartMessage = JSON.parse(fs.readFileSync('./restartMessage', 'utf8'))
    const rm = require('fs').unlinkSync
    let m = await yukii.channels.cache.get(restartMessage.channel)?.messages.fetch(restartMessage.message)
    if (m) m.edit(`Restarted in \`${msFix(Date.now() - m.createdTimestamp)}\``)
    rm('./restartMessage')
    console.log(restartMessage.message)
    console.log(restartMessage.channel)
  }
})


const job = new CronJob('25 4,10,16,22 * * *', () => {
    console.log("Task started")
    yukii.emit('warn', 'Restart in 5 Minutes')
    yukii.user.setActivity('Bot restarting!')
  }
)
job.start()
