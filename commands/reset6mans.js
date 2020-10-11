import {queue} from '../index'

module.exports = {
	name: 'reset6mans',
    description: 'Allows users to leave 6mans queue',
    aliases: ['reset', 'resetqueue'],
	execute(message) {
        while (queue.length) {
            queue.pop();
        }

        message.channel.send(message.author + ' has reset the queue! There are currently ' + queue.length + ' people in the queue.');
	},
};

export {queue};