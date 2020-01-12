# discordjsBot
## About discordjsBot
This is a bot for the Discord platform that will assist me with managing one of my Discord servers. I am creating it to automate some common processes as well as to gain experience working with a Javascript library.

## Current Features
This bot welcomes new users to my Discord server and provides a RichEmbed message to encourage users to add additional roles who request them via two commands, `!rank` and `!role`. Users can also remove roles with the `!remove` command.

Users can enter a queue with the `!6mans` [or `!queue` as its alias] command. Once the queue reaches 6 players, it is shuffled and divides the players into 2 teams of three, and then clears the queue. Users can also leave the queue with the `!leavequeue` [or `!leave` as its alias] command.

I also was able to deploy this Node.js app onto Heroku to keep the bot online as often as possible.

## Future Features
I would like to add some additional functionality such as performing commands with API calls to third parties. 

With the random teams feature implemented now, I would like to build off that by automatically placing those users into team-based voice chats so they may communicate together while playing.
