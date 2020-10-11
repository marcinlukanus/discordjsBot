import {queue} from '../index'

module.exports = {
	name: '6mans',
    description: 'Creates queue and randomly determines teams once queue reaches 6 players',
    aliases: ['q', 'queue'],
	execute(message, args) {
        //Display which users are in the queue, useful for debugging
        if (args[0] === 'members') {
            if (queue.length) {
                return message.channel.send('Members in queue: ' + queue);
            }
            return message.channel.send('6mans queue is currently empty!');
        }

        // Check to make sure user isn't already in queue
        if (queue.includes(message.author)) {
            return message.channel.send('User already in queue!');
        }

        queue.push(message.author);
        message.channel.send(message.author + ' has joined the queue!');

        if (queue.length == 1) {
            message.channel.send('There is currently ' + queue.length + ' person in the queue.');
        } else if (queue.length < 6) {
            message.channel.send('There are currently ' + queue.length + ' people in the queue.');
        } else {
            randomizeTeams();

            message.channel.send('Blue team: ' + queue[0] + ', ' + queue[1] + ', ' + queue[2]);
            message.channel.send('Orange team: ' + queue[3] + ', ' + queue[4] + ', ' + queue[5]);

            // Empty queue once teams are formed, users will need to rejoin queue afterwards
            while (queue.length) {
                queue.pop();
            }
        }
	},
};

function randomizeTeams() {
    for (let i = 0; i < 1000; i++) {
        shuffle();
    }
}

function shuffle() {
    for (let i = queue.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
      }
}

export {queue};