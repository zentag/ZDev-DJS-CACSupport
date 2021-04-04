module.exports = (client) => {
    client.on("message", (message) => {
        if(message.channel.type === "dm"){
            if(!message.author.bot){
                if(hasTicket.has(message.author.id)){
                    client.channels.cache.get("816423421323640853").send(message.author.tag + " (" + message.author.id + ") >>" + message.content)
                }
                else{
                    message.reply("Sorry, you don't have a ticket open. Open one with -ticket")
                }
            }
            
        }
    })
}