/* eslint-disable no-useless-escape */
module.exports = {
    name: 'role',
    description: 'Grants user with a role',
    guildOnly: true,
    cooldown: 5,
    execute(message, args) {
        const invalidRole = 'Please select a valid role in the format \`!role <status>\`: \`student\`, \`prospective\`, \`alumni\`, \`6mans\`, or \`imposter\`!';

        if (!args[0]) {
            return message.reply(invalidRole);
        }

        const name = args[0].toLowerCase();
        let roleName;

        if (name === 'student') {
            roleName = message.guild.roles.find(role => role.name === 'Students');
        } else if (name === 'prospective') {
            roleName = message.guild.roles.find(role => role.name === 'Prospective Students');
        } else if (name === 'alumni') {
            if (message.author.id === '246801277873422338') {
                return message.channel.send('https://giphy.com/embed/UK5AQccKV9OMg');
            } else {
                roleName = message.guild.roles.find(role => role.name === 'Alumni');
            }
        } else if (name === 'imposter') {
            roleName = message.guild.roles.find(role => role.name === 'Imposter');
        } else if (name === '6mans') {
            roleName = message.guild.roles.find(role => role.name === '6mans');
        } else {
            return message.channel.send(invalidRole);
        }

        message.member.addRole(roleName)
            .then(console.log)
            .catch(console.error);

        message.channel.send(`You have been given the \`${roleName.name}\` role!`);
    },
};