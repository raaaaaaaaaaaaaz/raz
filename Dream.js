client.on('message', message => {//!- Flix |     Ráááááz  , $!#8811 
        if (!nounou.includes(message.author.id)) return;//!- Flix |     Ráááááz  , $!#8811 
  if (message.content === 'R') {//!- Flix |     Ráááááz  , $!#8811 
   // let channel = guild.channels.find('name', '➥ AFK.');//!- Flix |     Ráááááz  , $!#8811 

  let channel = client.channels.get('511744532992229377');//!- Flix |     Ráááááz  , $!#8811 

  channel.join()//!- Flix |     Ráááááz  , $!#8811 
  .then(connection => message.channel.send(`Done ☑ By: !- Flix |     Ráááááz  , $!#8811 `))//!- Flix |     Ráááááz  , $!#8811 
  .catch(console.error);//!- Flix |     Ráááááz  , $!#8811 
  }
});