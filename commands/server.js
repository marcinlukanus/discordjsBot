module.exports = {
	name: 'server',
	description: 'Server name and member count',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};