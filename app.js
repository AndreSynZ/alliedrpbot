

// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const token = process.env.token;

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
const PREFIX = "-" // bot's prefix


var SourceQuery = require('sourcequery');



var eightball = [ // sets the answers to an eightball
  ":8ball: | Yes!",
  ":8ball: | No.",
  ":8ball: | Maybe.",
  ":8ball: | Probably!",
  ":8ball: | I don't think so.",
  ":8ball: | Maybe.",
]






const fs = require('fs');

const activities_list = [
    "with Flopskis | -help", 
    "with SynZ | -help",
    "with Sickness | -help"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: "STREAMING", url: "https://www.twitch.tv/somethingluulop"}); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); // Runs this every 10 seconds.
});




client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.



  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }
  
  





  if(command === "kick") {
   
 
  
    let kUser = message.guild.member(message.mentions.users.first()  ||  message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("That wasn't valid, type this: ``-kick <person> <reason>``.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to kick people!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person cannot be kicked!")

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("kick")
    .setColor('RANDOM')
    .addField("Kicked user", `${kUser} with ID ${kUser.ID}`)
    .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason)
	.setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png");
	
    let kickChannel = message.guild.channels.find(`name`, "synz-logs");
    if(!kickChannel) return message.channel.send("Can't find general channel");
    

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }



  if(command === "info") {
    let myembed = new Discord.RichEmbed()
    .setTitle('Information!')
    .setAuthor("SynZ's Bot", "https://imgur.com/IqcgMgl.png")
    .setColor('RANDOM')
    .setDescription('This is information about the Bot!')
    .addField(":robot: SynZ's Bot:", 'In order to see the commands avaliable, type `-help`! ', true)
    .addField(':dog: Discord Server;', 'If you see any errors within the discord bot that needs fixing, hmu! ', true)
	.setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png")
    message.channel.send(myembed)
 }

  if(command === "ban"){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("That wasn't valid, type this: ``-ban <person> <reason>``.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to ban people!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor('RANDOM')
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
	.setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png");

    let incidentchannel = message.guild.channels.find(`name`, "synz-logs");
    if(!incidentchannel) return message.channel.send("Can't find general channel");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }




  
  if (command == "cookie") { // creates the command cookie
    if (args[0]) message.channel.send(message.author.toString() + " has given " + args[0].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
    else message.channel.send("Who do you want to give a cookie to? :cookie: (Correct usage: =cookie @username)") // sends the error message if no-one is mentioned
}

if (command == "8ball") { // creates the command 8ball
  if (args[0] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
  else message.channel.send("Ummmm, what is your question? :8ball: (Correct usage: =8ball <question>)"); // if not, error
}


if (command == "milk") { // creates the command milk
  if (args[0]) message.channel.send(message.author.toString() + " has given " + args[0].toString() + " a glass of milk! :milk:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
  else message.channel.send("Who do you want to give a glass of milk to? :milk:  (Correct usage: =milk @username)") // sends the error message if no-one is mentioned
}

if (command == "kill") { // creates the command kill
  if (args[0]) message.channel.send(message.author.toString() + " just killed " + args[0].toString() + " holy shizzle! :gun:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
  else message.channel.send("Who do you want to kill? :gun: (Correct usage: =kill @username)") // sends the error message if no-one is mentioned
}


if(command === "avatar") {
var member = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage(message.author.avatarURL)
    message.channel.send(embed)
};



  if(command === "help") {
     let myembed = new Discord.RichEmbed()
     .setTitle('Commands')
     .setAuthor("SynZ's Bot", "https://imgur.com/IqcgMgl.png")
     .setColor('RANDOM')
     .setDescription('These are all the commands that you can currently use on the bot. | ***More will be coming soon!***')
     .addField(':tools: Moderation:', '`-kick, -ban, -purge` ', true)
     .addField(':smile: Fun Commands:', '`-say, -cookie, -avatar, -milk, -coinflip, -8ball, -kill` ', true)
     .addField(':gear: Bot/Server:', '`-ping, -info, -stats` ')
	.setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png")
     message.channel.send(myembed)
  };

    let servers = client.guilds.size; // Server Count
    let users = 0; // Start of user count
    let channels = client.channels.size; // Channel Count
    
    // This goes through every guild to grab an accurate memberCount;
    client.guilds.map(g => users += g.memberCount);
    
    // Form Embed
	if(command == "stats")
{
    let myembed = new Discord.RichEmbed()
        .setTitle('Server Statistics')
    	.setColor('RANDOM')
        .addField('Users ', users)
        .addField('Channels ', channels)
        .setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png")
    	message.channel.send(myembed)
    
};



if(command == "coinflip")
{
      function doRandHT() {
var rand = ['HEADS!','TAILS!'];

return rand[Math.floor(Math.random()*rand.length)];
}
    let myembed = new Discord.RichEmbed()
    .setTitle('You got..')
    .setAuthor("SynZ's Bot", "https://imgur.com/IqcgMgl.png")
    .setColor('RANDOM')
    .setDescription(doRandHT())
    .setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png")
    message.channel.send(myembed)
 };



  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to purge!");

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));








  if(command === 'invite') {
    message.channel.send('https://discord.gg/nfcYPRw');


  }}})

  





client.login(token).catch(err => console.log(err));
