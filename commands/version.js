module.exports = {
    minArgs: 0,
    maxArgs: 0,
    callback: ({ message }) => {
        message.reply(`The bot is in version ${botVersion}`)
    }
}