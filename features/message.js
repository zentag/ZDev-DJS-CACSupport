module.exports = (client) => {
    client.on("message", (message) => {
        if(message.channel.type === "dm"){
            if(!message.author.bot){
                
            }
            
        }
    })
}