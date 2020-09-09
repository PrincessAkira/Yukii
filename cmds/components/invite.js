const Discord = require('discord.js')

module.exports = {

  description: 'Null',
  name: 'invite',
  category: 'misc',
  guildOnly: true,

  execute (yukii, message) {
    const Invite = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setThumbnail('https://i.imgur.com/SL1L9Bn.png')
      .setTitle(":love_letter: *** Heres the Invite *** :love_letter:")
      .addField("***Heres an Invite:***" , "***https://discordapp.com/oauth2/authorize?client_id=719221712679338074&scope=bot&permissions=379968***")
      .setTimestamp()
  return message.channel.send(Invite);
  }
}