import {queue} from '../index'

module.exports = {
	name: 'leavequeue',
    description: 'Allows users to leave 6mans queue',
    aliases: ['l', 'leave'],
	execute(message) {
        // Check to make sure user is not in queue
        if (!queue.includes(message.author)) {
            return message.channel.send('User not already in queue!');
        }

        queue = queue.filter(member => member !== message.author);
        message.channel.send('User "hypothetically" removed: ' + message.author);
        message.channel.send(message.author + ' has left the queue! There are currently ' + queue.length + ' people in the queue.');
        message.channel.send('Users in queue: ' + queue);
        console.log('Queue after user left: ' + queue);
	},
};

export {queue};