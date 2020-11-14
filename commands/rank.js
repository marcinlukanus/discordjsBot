/* eslint-disable no-useless-escape */
module.exports = {
    name: 'rank',
    description: 'Grants user with their RL rank',
    guildOnly: true,
    cooldown: 2,
    execute(message, args) {
        const invalidRank = 'Please select a valid rank in the format \`!rank <RLRank>\`: \`ssl\`, \`gc3\`, \`gc2\`, \`gc1\`, \`c3\`, \`c2\`, \`c1\`, \`d3\`, \`d2\`, \`d1\`, \`plat\`, \`gold\`, \`silver\`, or \`bronze\`!';

        if (!args[0]) {
            return message.reply(invalidRank);
        }

        const name = args[0].toLowerCase();
        let roleName;

        if (name === 'ssl') {
            roleName = message.guild.roles.find(role => role.name === "Supersonic Legend");
        } else if (name === 'gc3') {
            roleName = message.guild.roles.find(role => role.name === "Grand Champion 3");
        } else if (name === 'gc2') {
            roleName = message.guild.roles.find(role => role.name === "Grand Champion 2");
        } else if (name === 'gc1') {
            roleName = message.guild.roles.find(role => role.name === "Grand Champion 1");
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
            return message.channel.send(invalidRank);
        }

        message.member.addRole(roleName)
            .then(console.log)
            .catch(console.error);

        message.channel.send(`You have been given the \`${roleName.name}\` role!`);
    },
};