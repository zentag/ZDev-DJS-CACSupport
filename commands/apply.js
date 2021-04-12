const Discord = require("discord.js")
var open = false
module.exports = {
    minArgs: 0,
    maxArgs: 0,
    callback: ({ message, client }) => {
        if(message.channel.type == "dm" && open == true){
            global.hasApp = new Set()
            hasApp.add(message.author.id)
            const questions = ["What is your Minecraft name?", "What are you applying for?", "What is your MEE6 level?(!rank)", "How many hours have you played?(Esc>Statistics>Time Played)", "When did you join the server?", "Why should we pick you?(3+ sentences)", "What type of person are you?(3+ qualities)", "If a player has tons of diamond gear after 20 minutes playing, what do you do?", "You get around 5 reports about a player being toxic/annoying/mean. What do you do?", "A player joins a immediately says “this is a shitty server”. What do you do?"]
            let counter = 1
            const filter = m => m.author.id === message.author.id
            const collector = new Discord.MessageCollector(message.channel, filter, {
                max: questions.length
            })
            message.channel.send(questions[0])
            collector.on('collect', m => {
                if(counter < questions.length){
                    m.channel.send(questions[counter++])
                }
            })
            collector.on('end', collected => {
                hasApp.delete(message.author.id)
                message.channel.send("Thank you for applying! Your application has been sent to the rest of the team.")
                const appChannel = client.channels.cache.get("830871007194906684")
                appChannel.send(`${message.author.tag} has applied! ||@here||`)
                let counter = 0
                collected.forEach((value) => {
                    appChannel.send(`**${questions[counter++]}:**\n${value.content}`)
                })
            })
        }
        else{
            message.reply("Please use this command in a DM channel with me! If you are, then applications may be closed.")
        }
        
    }
}