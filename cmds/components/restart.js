const {
  token
} = require('./../../settings.json')
const Discord = require('discord.js')

module.exports = {

  description: 'Null',
  name: 'restart',
  category: 'Owner',
  ownerOnly: true,
  guildOnly: true,

  async execute (yukii, message) {

    console.log('Performing Restart')
    const Restart = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle(':gear:**Performing Restart**:gear: ')
      .setThumbnail('https://camo.githubusercontent.com/03757a303777b6b2908fb8a64563d9c68d26ebfb/68747470733a2f2f692e696d6775722e636f6d2f4e3172374832472e706e67')
    message.channel.send(Restart).then(console.clear())
    yukii.destroy().then(yukii.login(token))
  }
}