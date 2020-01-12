/* eslint-disable no-useless-escape */
module.exports = {
	name: '6mans',
    description: 'Creates queue and randomly determines teams once queue reaches 6 players',
    aliases: ['q'],
	execute(message) {
        // Check to make sure user isn't already in queue
        if (userAlreadyInQueue(message.author)) {
            return message.channel.send('User already in queue!');
        }

        queue.push(message.author);
        message.channel.send(message.author + ' has joined the queue!');

        if (queue.length != 6) {
            message.channel.send('There are currently ' + queue.length + ' people in the queue.')
        } else {
            const teams = randomizeTeams();

            message.channel.send('Blue team: ' + teams.blue[0] + ', ' + teams.blue[1] + ', ' + teams.blue[2]);
            message.channel.send('Orange team: ' + teams.orange[0] + ', ' + teams.orange[1] + ', ' + teams.orange[2]);

            // Empty queue once teams are formed, users will need to rejoin queue afterwards
            queue = [];
        }

		
	},
};

function randomizeTeams() {
    let blue, orange = [];

    for (let i = 0; i < 1000; i++) {
        shuffle();
    }

    blue = queue.splice(0, 3);
    orange = queue.splice(3, 6);

    return {
        blue: blue,
        orange: orange
    };
}

function shuffle() {
    for (let i = queue.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
      }
}

function userAlreadyInQueue(newUser) {
    queue.forEach(user => {
        if (user === newUser) {
            return true;
        }
        return false;
    })
}