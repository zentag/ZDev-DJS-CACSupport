const Discord = require("discord.js");
const { Server } = require("ws");
const client = new Discord.Client();
var modmailUser = '521115847801044993';
var mod = 'Infinity_Oofs#3438'

client.on('ready', () => {
     console.log("Ready");
     client.user.setActivity("CraftACat || Just DM", { type: "PLAYING"})

});
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if(msg.channel.type === 'dm') {
    if(msg.author.bot === false){
      client.channels.cache.get('816423421323640853').send('@here ' + msg.author.tag + '(' + msg.author.id + ')' + '>>' + msg.content.replace('-modmail ', ''));
    }
  }
  if (msg.content.startsWith('-user')) {
    modmailUser = msg.content.replace('-user ', '');
  }
  if (msg.content.startsWith('-answer')) {
    if(msg.member.roles.cache.find(r => r.name === "Founder") || msg.member.roles.cache.find(r => r.name === "Admin") || msg.member.roles.cache.find(r => r.name === "Moderator") || msg.member.roles.cache.find(r => r.name === "Trial Moderator")){
      mod = msg.author.tag
      client.users.cache.get(modmailUser).send('**Staff:** ' + mod + ': ' + msg.content.replace('-answer ', ''));
    }
    else{
      msg.reply('sorry, you do not have permission to do this command.')
    }
  }
  if(msg.content.startsWith('-suggest')){
    const suggestion = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Suggestion from ' + msg.author.tag)
      .setFooter('Suggestion by ' + msg.author.tag + ' | Version 1.2')
      .setDescription(msg.content.replace('-suggest ', ''));

      client.channels.cache.get('807046119950778419').send(suggestion).then(function (message) {
        message.react("✅")
        message.react("❌")
      })
  }
});



client.login('ODExMzc4ODk5NzczNjg1ODIx.YCxVfA.IuDitWbapJj7NrfACZaWHJ8Cevg');