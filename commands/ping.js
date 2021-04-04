module.exports = {
    minArgs: 0,
    maxArgs: 1,
    callback: ({ message }) => {
        message.reply("Pong!")
    }
}