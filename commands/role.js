/* eslint-disable no-useless-escape */
module.exports = {
	name: 'role',
	description: 'Grants user with a role',
    guildOnly: true,
    cooldown: 5,
	execute(message, args) {
        const invalidRole = 'Please select a valid role in the format \`!role <status>\`: \`student\`, \`tryout\`, \`prospective\`, or \`alumni\`!';

		if (!args[0]) {
			return message.reply(invalidRole);
        }
        
        const name = args[0].toLowerCase();
        let roleName;

        if (name === 'student') {
            roleName = message.guild.roles.find(role => role.name === "Students");
        } else if (name === 'prospective') {
            roleName = message.guild.roles.find(role => role.name === "Prospective Students");
        } else if (name === 'alumni') {
            roleName = message.guild.roles.find(role => role.name === "Alumni");
        } else if (name === 'imposter') {
            roleName = message.guild.roles.find(role => role.name === "Imposter");
        } else if (name === '6mans') {
            roleName = message.guild.roles.find(role => role.name === "6mans");
        } else {
            return message.channel.send(invalidRole);
        }

        message.member.addRole(roleName)
            .then(console.log)
            .catch(console.error);

        message.channel.send(`You have been given the \`${roleName.name}\` role!`);
	},
};