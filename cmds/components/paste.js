const hastebin = require('hastebin.js')
const haste = new hastebin({ /* url: 'hastebin.com */ })

module.exports = {

  description: 'Null',
  name: 'paste',
  category: 'misc',
  guildOnly: true,

  async execute (yukii, message, args) {
    const link = (await haste.post(args.join(' ')))
    message.channel.send('Here is your Link: ' + link)
  }
}