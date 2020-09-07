/* eslint-disable no-useless-escape */
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

let queue = [];
const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find(ch => ch.name === 'introductions');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcome to the server, ${member}, say howdy!`);

	const welcomeEmbed = new Discord.RichEmbed()
			.setColor('#C8102E')
			.setTitle('Welcome to ISURL!')
			.setDescription('Home to Iowa State\'s top Rocket League players!')
			.setThumbnail('https://cdn.discordapp.com/attachments/348232481729806347/553349688611307647/ISUrlBoostLogo.png')
			.addField('Introduce yourself!', 'Below are two roles that you can add so we can know more about you!')
			.addField('\`!role <status>\`\nfor student status:', '\`student\`, \`alumni\`, \`prospective\`')
			.addField('\`!role <status>\`\nfor additional roles:', '\`6mans\`')
			.addField('\`!rank <RLrank>\`\nfor your Rocket League rank:', '\`gc\`, \`c3\`, \`c2\`, \`c1\`, \`d3\`, \`d2\`, \`d1\`, \`plat\`, \`gold\`, \`silver\`, \`bronze\`', true)
			.setFooter('If you need anything or have any questions, message @marcin#8250');

	channel.send(welcomeEmbed);
});

client.login(process.env.DISCORDJS_TOKEN);

export default queue;
export function resetQueue() {
	queue = [];
}