const Discord = require("discord.js");
const { Server } = require("ws");
const client = new Discord.Client();
var modmailUser = 0;

client.on('ready', () => {
     console.log("Ready");
     client.user.setActivity("CraftACat || -modmail", { type: "PLAYING"})

});
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  if(msg.channel.type === 'dm') {
    if (msg.content.startsWith('-modmail')) {
      client.users.cache.get('521115847801044993').send(msg.author.tag + '(' + msg.author.id + ')' + '>>' + msg.content.replace('-modmail ', ''));
    }
  }
  
});
client.on('message', msg => {
  if(msg.channel.type === 'dm') {
    if (msg.content.startsWith('-user')) {
      modmailUser = msg.content.replace('-user ', '');
    }
  }
  
});
client.on('message', msg => {
  if(msg.channel.type === 'dm') {
    if (msg.content.startsWith('-answer')) {
      client.users.cache.get(modmailUser).send('**Staff:** Infinity_Oofs: ' + msg.content.replace('-answer ', ''));
    }
  }
  
});



client.login('ODExMzc4ODk5NzczNjg1ODIx.YCxVfA.IuDitWbapJj7NrfACZaWHJ8Cevg');