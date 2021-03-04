const Discord = require("discord.js");
const { Server } = require("ws");
const client = new Discord.Client();
var modmailUser = '521115847801044993';
var mod = 'Infinity_Oofs#3438'
const version = 1.4
const hasTicket = new Set()

client.on('ready', () => {
  console.log("Ready");
  client.user.setActivity("CraftACat || Just DM", { type: "PLAYING"});
});
client.on('message', msg => {
  if(msg.content.startsWith('-end')){
    if(msg.member.roles.cache.find(r => r.name === "Support Team")){
      hasTicket.delete(msg.content.replace('-end ', ''))
      const ticketEnd = new Discord.MessageEmbed()
        .setTitle('Ticket closed by staff ' + msg.author.tag)
        .setDescription('Your ticket has been marked as resolved. To add another ticket do -ticket.')
        .setColor('#0099ff')
        .setFooter('Ticket | Version ' + version);
      client.users.cache.get(msg.content.replace('-end ', '')).send(ticketEnd)
      msg.reply('You have ended user: ' + msg.content.replace('-end ', '') + "'s ticket.")
    }
    else{
      msg.reply('Sorry, you do not have permssion to do this command.')
    }
  }
  if (msg.content.startsWith('-ticket')) {
    if(hasTicket.has(msg.author.id) === false){
      const ticketStart = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Your ticket has been opened.')
        .setFooter('Ticket | Version ' + version)
        .setDescription('Please state your problem now. Staff have been pinged and will respond shortly. From now on you can DM the bot directly.');
      client.users.cache.get(msg.author.id).send(ticketStart)
      client.channels.cache.get('816423421323640853').send('@here ' + msg.author.tag + ' has started a ticket (' + msg.author.id + ')');
      hasTicket.add(msg.author.id)
      msg.delete()
    }
    else{
      msg.delete()
      msg.reply('sorry, you already have a ticket open')
    }
  }
  if(msg.channel.type === 'dm') {
    if(msg.author.bot === false){
      client.channels.cache.get('816423421323640853').send(msg.author.tag + ' (' + msg.author.id + ') ' + '>> ' + msg.content);
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
      .setFooter('Suggestion by ' + msg.author.tag + ' | Version ' + version)
      .setDescription(msg.content.replace('-suggest ', ''));

      client.channels.cache.get('807046119950778419').send(suggestion).then(function (message) {
        message.react("✅")
        message.react("❌")
      })
  }
  if(msg.content === '-help'){
    const help = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Commands')
      .setFooter('Help Menu | Version ' + version)
      .setDescription('**-help** - Brings up this menu \n**-suggest** (suggestion) - Puts a suggestion in the suggestion channel \n**-ticket** - Opens a new ticket which pings staff\n**Getting Support** - Just DM this bot to send a message to staff ');
    msg.channel.send(help)
  }
});



client.login('ODExMzc4ODk5NzczNjg1ODIx.YCxVfA.IuDitWbapJj7NrfACZaWHJ8Cevg');