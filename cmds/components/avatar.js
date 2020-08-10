const Discord = require('discord.js');

module.exports = {

    name: 'avatar',
    description: 'null',
    guildOnly: true,
    category: 'Misc',

    execute(message, yukii, args, error) {
        if (!args.length) {
            return yukii.channel.send(error);
        } else if (args[0]) {
            //const tagged = yukii.mentions.users.first();
            const SuccessBedAvatar = new Discord.RichEmbed()
                .setColor('#ff0000')
              // eslint-disable-next-line no-undef
                .setTitle(`:camera:  ${member.user.username}'s Avatar :camera:`)
                .setImage(message.mentions.users.displayAvatarURL({
                    format: 'png',
                    size: 512
                }))
            return yukii.channel.send(SuccessBedAvatar);

        }
    }
}