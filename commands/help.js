const Discord = require("discord.js")

module.exports = {
    minArgs: 0,
    maxArgs: 1,
    callback: ({ message }) => {
        if(message.content === "-help"){
            const help = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Commands')
                .setFooter('Help Menu | Version ' + botVersion)
                .setDescription("**-help** - Brings up this menu \n**-suggest** (suggestion) - Puts a suggestion in the suggestion channel \n**-ticket** - Opens a new ticket which pings staff\n**-botsuggest (suggestion)** - Send a suggestion for CraftABot to the Developer\n**-apply** - Opens an application for staff. Only use this in a DM with the bot \n**-friends (someone's @ note: putting an @ is optional)** - Get a friend count of yourself when just using -friends or get someone else's with -friend (@)\n**Getting Support** - Just DM this bot to send a message to staff ");
            message.channel.send(help)
        }
        if(message.content === "-help mc"){
            if(message.member.roles.cache.find(r => r.name === "Staff")){
                const helpMC = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle('In-game Staff Commands')
                  .setFooter('In-game Commands | Version ' + botVersion)
                  .setDescription('**-help mc** - Brings up this menu \n**Minecraft Commands** \n**/tempban (user) (time) (reason)** - Tempban a user \n**/co inspect** - Switches to inspector mode \n**/co rollback user: (user) time: (time) radius: (radius)** - Rollback something \n**/staff** - Switches to staff mode');
                message.channel.send(helpMC)
              }
              else{
                return message.reply("Sorry, but you don't have permission to do this command.")
              }
        }
        if(message.content === "-help support"){
            if(message.member.roles.cache.find(r => r.name === "Staff")){
                const helpSupport = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle('Support Staff Commands')
                  .setFooter('Discord Commands | Version ' + botVersion)
                  .setDescription("**-help support** - Brings up this menu \n**-answer (user ID) (message)** - Sends a message to the user you specified \n**-end (user ID)** - Ends a user's ticket");
                message.channel.send(helpSupport)
              }
              else{
                return message.reply("Sorry, but you don't have permission to do this command.")
              }
        }
        const valid = ["-help", "-help mc", "-help support"]
        if(!valid.includes(message.content)){
            message.reply("Incorrect usage! Use -help!")
        }
    }
}