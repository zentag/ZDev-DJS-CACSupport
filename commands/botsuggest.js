const Discord = require("discord.js")


module.exports = {
    minArgs: 1,
    maxArgs: -1,
    callback: async ({ message, client}) => {
        const botSuggestion = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}'s suggestion for the bot`)
            .setColor("0099ff")
            .setDescription(message.content.replace("-botsuggest ", ""))
            .setFooter(`Bot Suggestion | Version ${botVersion}`)
        client.users.cache.get("521115847801044993").send(botSuggestion);
        message.delete()
        let messageConfirm = await message.channel.send("Your suggestion has been sent to the developer!")
        function msgDelete() {
            messageConfirm.delete()
        }
        setTimeout(msgDelete,5000)
    }
}