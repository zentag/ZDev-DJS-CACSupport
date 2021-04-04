const Discord = require("discord.js")

module.exports = {
    minArgs: 1,
    maxArgs: -1,
    callback: ({ message, client }) => {
        const suggestion = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Suggestion from ' + message.author.tag)
            .setFooter('Suggestion by ' + message.author.tag + ' | Version ' + botVersion)
            .setDescription(message.content.replace('-suggest ', ''));

        client.channels.cache.get('807046119950778419').send(suggestion).then(function (message) {
            message.react("✅")
            message.react("❌")
        })
    }
}