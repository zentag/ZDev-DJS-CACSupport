const Discord = require("discord.js")

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
}

module.exports = {
    minArgs: 0,
    maxArgs: 1,
    callback: async ({ message, client }) => {
        console.log(message.content)
        const friends = between(0, 100)
        if(message.content.includes(" ")){
            const split = message.content.split(" ")
            const userID = split[1].replace(/\D/g, "")
            console.log(userID)
            const userTag = client.users.cache.find(user => user.id == userID)
            const splitEmbed = new Discord.MessageEmbed()
                .setTitle(`${userTag.tag}'s friends`)
                .setDescription('Calculating friends...')
                .setColor("0099ff")
                .setFooter('Friends | Version ' + botVersion)
            const splitEmbedEdited = new Discord.MessageEmbed()
                .setTitle(`${userTag.tag}'s friends`)
                .setDescription(`You have ${friends} friends!`)
                .setColor("0099ff")
                .setFooter('Friends | Version ' + botVersion)
            const first = await message.channel.send(splitEmbed)
            function editMSG() {
                first.edit(splitEmbedEdited)
            }
            setTimeout(editMSG,3000)
        }else{
            const splitEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.tag}'s friends`)
                .setDescription('Calculating friends...')
                .setColor("0099ff")
                .setFooter('Friends | Version ' + botVersion)
            const splitEmbedEdited = new Discord.MessageEmbed()
                .setTitle(`${message.author.tag}'s friends`)
                .setDescription(`You have ${friends} friends!`)
                .setColor("0099ff")
                .setFooter('Friends | Version ' + botVersion)
            const first = await message.channel.send(splitEmbed)
            function editMSG() {
                first.edit(splitEmbedEdited)
            }
            setTimeout(editMSG,3000)
        }
    }
}