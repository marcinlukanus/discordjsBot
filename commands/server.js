module.exports = {
	name: 'server',
    description: 'Server name and member count',
    guildOnly: true,
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};