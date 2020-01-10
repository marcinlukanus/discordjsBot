module.exports = {
	name: 'role',
	description: 'Grants user with a role',
    guildOnly: true,
    cooldown: 5,
	execute(message, args) {
		if (!args[0]) {
			return message.reply('you need to pick which role you want!');
        }
        
        const name = args[0].toLowerCase();
        let roleName;

        if (name === 'student') {
            roleName = message.guild.roles.find(role => role.name === "Students");
        } else if (name === 'prospective') {
            roleName = message.guild.roles.find(role => role.name === "Prospective Students");
        } else if (name === 'alumni') {
            roleName = message.guild.roles.find(role => role.name === "Alumni");
        } else {
            // eslint-disable-next-line no-useless-escape
            return message.channel.send('Please select a valid role: \`student\`, \`prospective\`, or \`alumni\`!');
        }

        message.member.addRole(roleName)
            .then(console.log)
            .catch(console.error);

        message.channel.send(`You have been given the \`${roleName.name}\` role!`);
	},
};