const Discord = require("discord.js")

module.exports = {
    minArgs: 1,
    maxArgs: 1,
    callback: ({ message, client }) => {
        if(isNaN(message.content.replace('-end ', ''))){
            message.reply("Sorry, you have to use a valid user ID")
          }
          else{
            if(message.member.roles.cache.find(r => r.name === "Support Team")){
                if(hasTicket.has(message.content.replace("-end ", ""))){
                    try{
                        hasTicket.delete(message.content.replace('-end ', ''))
                        const ticketEnd = new Discord.MessageEmbed()
                          .setTitle('Ticket closed by staff ' + message.author.tag)
                          .setDescription('Your ticket has been marked as resolved. To add another ticket do -ticket.')
                          .setColor('#0099ff')
                          .setFooter('Ticket | Version ' + botVersion);
                        client.users.cache.get(message.content.replace('-end ', '')).send(ticketEnd)
                        message.reply("You have ended " + message.content.replace('-end ', '') + "'s ticket")
                      }
                      catch(err){
                        console.log(err)
                      }
                }
                else{
                    message.reply("This person doesn't have a ticket open!")
                }
            }
            else{
              message.reply('Sorry, you do not have permssion to do this command.')
            }
          }
    }
}