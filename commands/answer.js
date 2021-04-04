module.exports = {
    minArgs: 2,
    maxArgs: -1,
    callback: async ({ message, client }) => {
        if(message.member.roles.cache.find(r => r.name === "Support Team")){
            const mod = message.author.tag
            const splitWords = message.content.split(" ")
            const modmailUser = splitWords[1].toString()
            splitWords.shift()
            splitWords.shift()
            console.log(splitWords)
            const answerWithComma = splitWords.toString()
            console.log(answerWithComma)
            const answer = answerWithComma.replace(/,/g, " ")
            console.log(answer)
            const guild = await client.guilds.cache.get("807044079979593748")
            if(guild.members.cache.has(modmailUser)){
              try{
                console.log(modmailUser)
                const modMailTag = client.users.cache.find(user => user.id === modmailUser)
                client.users.cache.get(modmailUser).send('**Staff:** ' + mod + ': ' + answer);
                message.channel.send("The message went through to " + modMailTag.tag)
              }
              catch(error){
                console.log(error)
              }
            }
            else{
              message.reply("Looks like this member doesn't exist!")
            }
          }
          else{
            message.reply('sorry, you do not have permission to do this command.')
          }
    }
}