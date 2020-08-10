module.exports = {

  func: (message) => {
    {
      if (message.channel.nsfw === true) {
      return(1);
      } else {
        return message.channel.send(':gear: Please use this Command in an NSFW-Channel :gear:')
      }
    }
  }
}

