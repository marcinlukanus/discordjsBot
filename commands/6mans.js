/* eslint-disable no-useless-escape */
import queue from '../index'

module.exports = {
	name: '6mans',
    description: 'Creates queue and randomly determines teams once queue reaches 6 players',
    aliases: ['q'],
	execute(message) {
        // Check to make sure user isn't already in queue
        if (userAlreadyInQueue(message.author)) {
            return message.channel.send('User already in queue!');
        }

        console.log('Queue: ' + queue);
        console.log('Author: ' + message.author);

        queue.push(message.author);
        message.channel.send(message.author + ' has joined the queue!');

        if (queue.length != 6) {
            message.channel.send('There are currently ' + queue.length + ' people in the queue.')
        } else {
            randomizeTeams();

            message.channel.send('Blue team: ' + queue[0] + ', ' + queue[1] + ', ' + queue[2]);
            message.channel.send('Orange team: ' + queue[3] + ', ' + queue[4] + ', ' + queue[5]);

            // Empty queue once teams are formed, users will need to rejoin queue afterwards
            queue = [];
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

function userAlreadyInQueue(newUser) {
    queue.forEach(user => {
        console.log('Compared ' + user.id + ' to ' + newUser.id);
        if (user.id === newUser.id) {
            return true;
        }
        
        return false;
    })
}