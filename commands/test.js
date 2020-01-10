/* eslint-disable no-useless-escape */
module.exports = {
	name: 'test',
    description: 'test',
    cooldown: 3,
	execute(message) {
		message.channel.send('This is used for formatting text for messages so Marcin can ensure everything looks as it should.');
	},
};