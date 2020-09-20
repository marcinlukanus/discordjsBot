import queue from '../index'

module.exports = {
	name: 'leavequeue',
    description: 'Allows users to leave 6mans queue',
    aliases: ['l', 'leave'],
	execute(message) {
        // Check to make sure user is not in queue
        if (!queue.includes(message.author)) {
            return message.channel.send('User not already in queue!');
        }

        queue.pop(message.author);
        message.channel.send(message.author + ' has left the queue! There are currently ' + queue.length + ' people in the queue.');
	},
};

export default queue;