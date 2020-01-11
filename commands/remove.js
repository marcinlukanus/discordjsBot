/* eslint-disable no-useless-escape */
module.exports = {
	name: 'remove',
	description: 'Removes a user\'s role',
    guildOnly: true,
    cooldown: 2,
	execute(message, args) {
        const invalidRoleOrRank = 'Please select a valid role in the format \`!remove <status>\`: \`student\`, \`tryout\`, \`prospective\`, \`alumni\`, or \`!remove <RLRank>\`: \`gc\`, \`c3\`, \`c2\`, \`c1\`, \`d3\`, \`d2\`, \`d1\`, \`plat\`, \`gold\`, \`silver\`, or \`bronze\`!';

		if (!args[0]) {
			return message.reply(invalidRoleOrRank);
        }
        
        const name = args[0].toLowerCase();
        let roleName;

        if (name === 'student') {
            roleName = message.guild.roles.find(role => role.name === "Students");
        } else if (name === 'prospective') {
            roleName = message.guild.roles.find(role => role.name === "Prospective Students");
        } else if (name === 'alumni') {
            roleName = message.guild.roles.find(role => role.name === "Alumni");
        } else if (name === 'tryout') {
            roleName = message.guild.roles.find(role => role.name === "Tryout Gang");
        } else if (name === 'gc') {
            roleName = message.guild.roles.find(role => role.name === "Grand Champion");
        } else if (name === 'c3') {
            roleName = message.guild.roles.find(role => role.name === "Champion 3");
        } else if (name === 'c2') {
            roleName = message.guild.roles.find(role => role.name === "Champion 2");
        } else if (name === 'c1') {
            roleName = message.guild.roles.find(role => role.name === "Champion 1");
        } else if (name === 'd3') {
            roleName = message.guild.roles.find(role => role.name === "Diamond 3");
        } else if (name === 'd2') {
            roleName = message.guild.roles.find(role => role.name === "Diamond 2");
        } else if (name === 'd1') {
            roleName = message.guild.roles.find(role => role.name === "Diamond 1");
        } else if (name === 'plat') {
            roleName = message.guild.roles.find(role => role.name === "Platinum");
        } else if (name === 'gold') {
            roleName = message.guild.roles.find(role => role.name === "Gold");
        } else if (name === 'silver') {
            roleName = message.guild.roles.find(role => role.name === "Silver");
        } else if (name === 'bronze') {
            roleName = message.guild.roles.find(role => role.name === "Bronze");
        } else {
            // eslint-disable-next-line no-useless-escape
            return message.channel.send(invalidRoleOrRank);
        }

        message.member.removeRole(roleName)
            .then(console.log)
            .catch(console.error);

        message.channel.send(`You have removed the \`${roleName.name}\` role!`);
	},
};