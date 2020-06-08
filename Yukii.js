const Discord = require('discord.js');
const fs = require('fs');
const yukii = new Discord.Client();
yukii.commands = new Discord.Collection();
const {
  PREFIX,
  token
} = require('./settings.json');

// /--- Connect-Path ---\ \\

yukii.login(token);

yukii.on('disconnect', () => {
  yukii.login(token);
});

for (const file of fs.readdirSync('./cmds/components').filter(file => file.endsWith('.js'))) {
  yukii.commands.set(yukii.name, yukii);
  yukii.commands.set(require(`./cmds/components/${file}`).name, require(`./cmds/components/${file}`));
}

yukii

  .on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'DM') return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (!yukii.commands.has(cmd)) return;
    try {yukii.commands.get(cmd).run(yukii, message, args)}catch(err){console.error(err) }
  })

  .once('ready', () => { console.log(`Logged in as ${yukii.user.tag}!`); yukii.user.setActivity('in ' + `${yukii.guilds.resolve.length} Servers ` + '| Prefix: -y') });
