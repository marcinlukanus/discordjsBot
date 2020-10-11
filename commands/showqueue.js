import {queue} from '../index'

module.exports = {
	name: 'showqueue',
    description: 'Allows users to leave 6mans queue',
    aliases: ['show'],
	execute(message) {
        message.channel.send('Users in queue: ' + queue);
	},
};

export {queue};