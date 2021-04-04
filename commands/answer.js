module.exports = {
    minArgs: 2,
    maxArgs: -1,
    callback: ({ message, client }) => {
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
            try{
                console.log(modmailUser)
              client.users.cache.get(modmailUser).send('**Staff:** ' + mod + ': ' + answer);
              message.channel.send("The message went through to " + modmailUser)
            }
            catch(error){
                console.log(error)
            }
          }
          else{
            message.reply('sorry, you do not have permission to do this command.')
          }
    }
}