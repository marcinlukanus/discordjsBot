const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json')

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    // const command = args.shift().toLowerCase();
    
	if (message.content === `${prefix}ping`) {
        message.channel.send('pong');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}pong`) {
        message.channel.send('ping');
    }
});

client.login(process.env.DISCORDJS_TOKEN);