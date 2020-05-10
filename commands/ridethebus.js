/* eslint-disable no-useless-escape */
module.exports = {
	name: 'ridethebus',
    description: 'Links to the Ride The Bus website for convenience',
    aliases: ['rtb'],
    cooldown: 3,
	execute(message) {
		const linkText = 'http://ridethebus.herokuapp.com';

		message.channel.send(linkText);
	},
};

