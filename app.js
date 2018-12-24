

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
const PREFIX = "!" // bot's prefix


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

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity("out for =help", {type: "WATCHING"});
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity("out for =help", {type: "WATCHING"});
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity("out for =help", {type: "WATCHING"});
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
  
  
    if(command === 'players') {
  
  var sq = new SourceQuery(1000); // 1000ms timeout
sq.open('208.103.169.21', 27015);
 


 
sq.getPlayers(function(err, players){
    let myembed = new Discord.RichEmbed ()
	.setTitle("Players Online:")
	.setAuthor("CRUSHED Bot", "https://imgur.com/jHRLfZc.jpg")
    .setColor('#bc23ff')
    .setDescription(players.length + "/128")
    .setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png")
    .setThumbnail("https://imgur.com/jHRLfZc.jpg")
     message.channel.send(myembed)
});
 
 };



  if(command === "testing") {
    
  var sq = new SourceQuery(1000); // 1000ms timeout
sq.open('208.103.169.21', 27015);


	let myembed = new Discord.RichEmbed()
     .setTitle('**__test__**')
     .setAuthor("CRUSHED Bot", "https://imgur.com/jHRLfZc.jpg")
     .setColor('#bc23ff')
     .setDescription('Players Online:')
     .addField("asd")
     .setFooter("Bot made by SynZ", "https://imgur.com/IqcgMgl.png")
     .setThumbnail("https://imgur.com/jHRLfZc.jpg")
     message.channel.send(myembed)
  }





  if(command === "kick") {
   
 
  
    let kUser = message.guild.member(message.mentions.users.first()  ||  message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("That wasn't valid, type this: ``=kick <person> <reason>``.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to kick people!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person cannot be kicked!")

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**__kick__**")
    .setColor('RANDOM')
    .addField("Kicked user", `${kUser} with ID ${kUser.ID}`)
    .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason)
    .setFooter("Bot made by André", "https://imgur.com/Bg1yrqp.png")
    .setThumbnail("https://imgur.com/xadYceq.png");

    let kickChannel = message.guild.channels.find(`name`, "synz-logs");
    if(!kickChannel) return message.channel.send("Can't find general channel");
    

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }



  if(command === "info") {
    let myembed = new Discord.RichEmbed()
    .setTitle('**__Information!__**')
    .setAuthor("André's Bot", "https://imgur.com/dqWkYls.png")
    .setColor('RANDOM')
    .setDescription('This is information about the Bot and the Discord Server!')
    .addField(":robot: __André's Bot:__", 'In order to see the commands avaliable, type `=help`! ', true)
    .addField(':dog: __Discord Server:__', 'If you see any errors within the discord server that needs fixing, hmu! ', true)
    .setFooter("Bot made by André", "https://imgur.com/Bg1yrqp.png")
    .setThumbnail("https://imgur.com/xadYceq.png")
    message.channel.send(myembed)
 }

  if(command === "ban"){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("That wasn't valid, type this: ``=ban <person> <reason>``.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to ban people!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**__Ban__**")
    .setColor('RANDOM')
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
    .setFooter("Bot made by André", "https://imgur.com/Bg1yrqp.png")
    .setThumbnail("https://imgur.com/xadYceq.png");

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

  if(command === "help") {
     let myembed = new Discord.RichEmbed()
     .setTitle('**__Commands__**')
     .setAuthor("André's Bot", "https://imgur.com/dqWkYls.png")
     .setColor('RANDOM')
     .setDescription('These are all the commands that you can currently use on the bot. | ***More will be coming soon!***')
     .addField(':tools: Moderation:', '`=kick, =ban, =purge` ', true)
     .addField(':smile: Fun Commands:', '`=say, =cookie, =milk, =8ball, =kill` ', true)
     .addField(':gear: Bot/Server:', '`=ping, =invite, =info` ')
     .setFooter("Bot made by André", "https://imgur.com/Bg1yrqp.png")
     .setThumbnail("https://imgur.com/xadYceq.png")
     message.channel.send(myembed)
  }


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