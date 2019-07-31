const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'go') {
    	message.reply('ahead, mr joestar');
  	}
});

client.on('message', message => {
    if (message.content === 'Помощь') {
    	message.channel.sendMessage('```Прошу, вот список команд```');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
