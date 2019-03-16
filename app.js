		      if(command === 'players') {
  
  var sq = new SourceQuery(1000); // 1000ms timeout
sq.open('51.75.174.10', 27018);
 


 
sq.getPlayers(function(err, players){
    let myembed = new Discord.RichEmbed ()
    let playersString = "";
    players.forEach(ply => {
        playersString += ply.name + '\n';
    })
    myembed.setTitle("Players Currently Online:")
    myembed.setAuthor("Navy SEALs Database", "https://imgur.com/cynJ0Yp.png")
    myembed.setDescription(playersString)
    myembed.addField('Total Players Online:', players.length + '/45')
    myembed.setColor(colorlist[Math.floor(Math.random() * colorlist.length).toString(7)])
    myembed.setFooter("Bot made by Archer", "https://cdn.discordapp.com/avatars/280313289857171456/a_082033969e325ce03fb3efdcc1b9fdef.gif")
    myembed.setThumbnail("https://imgur.com/cynJ0Yp.png")
    myembed.setTimestamp()	
    message.channel.send(myembed);
})};
