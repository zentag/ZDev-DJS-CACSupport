const Discord = require("discord.js")

module.exports = {
    minArgs: 0,
    maxArgs: 0,
    callback: ({ message, client }) => {
        if(hasTicket.has(message.author.id) === false){
            const ticketStart = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle('Your ticket has been opened.')
              .setFooter('Ticket | Version ' + botVersion)
              .setDescription('Please state your problem now. Staff have been pinged and will respond shortly. From now on you can DM the bot directly.');
            client.users.cache.get(message.author.id).send(ticketStart)
            client.channels.cache.get('816423421323640853').send('@here ' + message.author.tag + ' has started a ticket (' + message.author.id + ')');
            hasTicket.add(message.author.id)
            message.delete()
          }
          else{
            message.delete()
            message.reply('sorry, you already have a ticket open')
          }
    }
}
