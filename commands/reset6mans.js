import queue from '../index'

module.exports = {
	name: 'resetqueue',
    description: 'Allows users to leave 6mans queue',
    aliases: ['reset'],
	execute(message) {
        queue = [];
        message.channel.send(message.author + ' has reset the queue! There are currently ' + queue.length + ' people in the queue.');
	},
};