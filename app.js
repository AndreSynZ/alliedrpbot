

// Load up the discord.js library
const Discord = require("discord.js");
const YTDL = require("ytdl-core");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const token = process.env.token;

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
const PREFIX = "=" // bot's prefix

var SourceQuery = require('sourcequery');

var servers = {};





const colorlist = [
	"#675645",
	"#e1d798",
	"#424756",
	"#4d784e",
	"#6ea171"
	];




const fs = require('fs');

const activities_list = [
    "with James | =help", 
    "with Archer | =help",
    "with Joking | =help"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: "STREAMING", url: "https://www.twitch.tv/somethingluulop"}); // sets bot's activities to one of the phrases in the arraylist.
    }, 6000); // Runs this every 10 seconds.
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
  };
  
  


	
	
	      if(command === 'server') {
  
  var sq = new SourceQuery(1000); // 1000ms timeout
sq.open('54.37.244.50', 27015);
 


 
sq.getInfo(function(err, info){
    let myembed = new Discord.RichEmbed ()
	.setTitle("Military RP Server Information:")
	.setAuthor("Navy SEALs Database", "https://imgur.com/cynJ0Yp.png")
    .setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
    .addField("Players:", info['players'] + "/60")
    .addField("Map:", info['map'])
    .addField("Gamemode:", 'MilitaryRP')
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
    .setThumbnail("https://imgur.com/cynJ0Yp.png")
    .setTimestamp()
     message.channel.send(myembed)
});
 
 };
	
	
	
	
	
	
	


	if (command === 'update') {
		
		 
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to use this command.')
		
		let testembed = new Discord.RichEmbed()
		.setDescription('- ' + args.join(" "))
		.setColor('RANDOM')
		.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
		
		message.delete().catch(O_o=>{});
		
		message.channel.send(testembed)
	};



	
	
	

	
	



		      if(command === 'players') {
  
  var sq = new SourceQuery(1000); // 1000ms timeout
sq.open('54.37.244.50', 27015);
 


 
sq.getPlayers(function(err, players){
    let myembed = new Discord.RichEmbed ()
    let playersString = "";
    players.forEach(ply => {
        playersString += ply.name + '\n';
    })
    myembed.setTitle("Players Currently Online:")
    myembed.setAuthor("Navy SEALs Database", "https://imgur.com/cynJ0Yp.png")
    myembed.setDescription(playersString)
    myembed.addField('Total Players Online:', players.length + '/60')
    myembed.setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
    myembed.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
    myembed.setThumbnail("https://imgur.com/cynJ0Yp.png")
    myembed.setTimestamp()	
    message.channel.send(myembed);
})};
	
	
	
	if(command === 'suggest') {


	
if (!args[1]) return message.channel.send('Proper Usage: `=suggest <suggestion>(Atleast two words in the suggestion is needed)`')


let sugembed = new Discord.RichEmbed()
	.setAuthor('Suggestion Created By: ' + `${message.member.user.tag}`, message.author.avatarURL)
	.setDescription(args.join(' '))
	.setColor('RANDOM')
	.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
    	.setThumbnail("https://imgur.com/cynJ0Yp.png")
	.setTimestamp()

    let sugchannel = message.guild.channels.find(x => x.name === "suggestions")
    if(!sugchannel) return message.channel.send("Can't find suggestions channel")

    sugchannel.send(sugembed)


	
	
            .then(function (message) {
              message.react("✅")
              message.react("❌")
            }).catch(function() {
              //Something
             })};
	
	

	if(command === 'suggest') {


	
if (!args[1]) return message.channel.send('')
		
	message.channel.send('Thank you for your suggestion!')};
	
	
	
  




if(command === "ip") {
var member = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
  .setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
  .addField('Server IP:', '54.37.244.50:27015')
    message.channel.send(embed)
};

	if(command === "forums") {
var member = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
  .setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
  .addField('Forums:', 'http://noxiousnetworks.co.uk/main/forums/index.php')
    message.channel.send(embed)
};
	
	

if(command === "avatar") {
var member = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
  .setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
  .setImage(message.author.avatarURL)
    message.channel.send(embed)
};



  if(command === "help") {
     let myembed = new Discord.RichEmbed()
     .setTitle('Commands')
     .setAuthor("Navy SEALs Database", "https://imgur.com/cynJ0Yp.png")
     .setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
     .setDescription('These are all the commands that you can currently use on the bot.')
     .addField(':smile: Fun Commands:', '`=say, =avatar, =coinflip` ', true)
     .addField(':gear: Bot/Server:', '`=ping, =server, =players, =stats, =suggest, =ip, =forums` ')
	.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
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
        .setTitle('Discord Server Statistics')
    	.setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
        .addField('Users:', users)
        .addField('Channels:', channels)
        .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
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
    .setAuthor("Navy SEALs Database", "https://imgur.com/cynJ0Yp.png")
    .setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
    .setDescription(doRandHT())
    .setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
    message.channel.send(myembed)
 };












  })

  





client.login(token).catch(err => console.log(err));
