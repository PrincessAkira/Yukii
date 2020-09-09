const Discord = require('discord.js')
const Danbooru = require('danbooru')
const booru = new Danbooru()

module.exports = {

  description: 'Null',
  name: 'danbooru',
  category: 'fun',
  guildOnly: true,

  async execute (yukii, message, args) {
    if (message.channel.nsfw === true) {
      booru.posts({
        random: 'true',
        tags: `${args[0]} order:date`
      }).then(posts => {
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
        const url = booru.url(post.large_file_url)
        const embed = new Discord.RichEmbed()
          .setDescription(':white_check_mark:  ***Here are the Results*** :white_check_mark: ')
          .setColor('#ff0000')
          .addField('**Tag**', `**${args[0]}**`)
          .setImage(url)
        return message.channel.send(embed)
      })
    } else if (message.channel.nsfw === false) {
      const errormess = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle(':warning:  **Error** :warning:')
        .setDescription('**Please specify the Command and try again**')
        .setThumbnail('https://i.imgur.com/SL1L9Bn.png')
      return errormess
    }
  }
}