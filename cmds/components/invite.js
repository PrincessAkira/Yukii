const Discord = require('discord.js')

module.exports = {

  description: 'Null',
  name: 'invite',
  category: 'Misc',
  guildOnly: true,

  execute (yukii, message) {
    const Invite = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setThumbnail('https://camo.githubusercontent.com/03757a303777b6b2908fb8a64563d9c68d26ebfb/68747470733a2f2f692e696d6775722e636f6d2f4e3172374832472e706e67')
      .setTitle(":love_letter: *** Heres the Invite *** :love_letter:")
      .addField("***Heres an Invite:***" , "***https://discordapp.com/oauth2/authorize?client_id=719221712679338074&scope=bot&permissions=379968***")
      .setTimestamp()
  return message.channel.send(Invite);
  }
}