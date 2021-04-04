const Discord = require("discord.js");
const client = new Discord.Client();
const WOKCommands = require('wokcommands');
const config = require("./config.json")
global.hasTicket = new Set()

global.botVersion = "2.1"

client.on('ready', async () => {
    console.log('ready')

    client.user.setActivity("CraftACat || -help", { type: "PLAYING"});
    new WOKCommands(client, {
        commandsDir: 'commands',
        featureDir: 'features'
    }).setDefaultPrefix('-')
})


client.login(process.env.token);