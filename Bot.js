
const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client({ intents: 32767 }); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setPresence({ game: { name: 'comando', type: 3, url: 'https://www.twitch.tv/alangb12'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
});



client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  if(comando === "live") {
    const m = await message.channel.send("minha live?");
    m.edit(`Essa minha live :https://www.twitch.tv/alangb12`);
}
  
if(comando === "welcome"){
    const m = await message.channel.send("pessoa nova");
    m.edit(`Olha só quem entou para a melhor e-team! 😍 Bem-vindo(a)`);
}
if(comando === "adivinhas"){
  const m = await message.channel.send("escolhar opção do jogo");
  m = await message.channel.send("1 facil,2 medio,3 dificil");
} 
if (comando === "1") {
  const m = await message.channel.send("que e que é?");
  m.edit(`Cai em pé e corre deitado?`);
}
if (comando === "chuva") {
  const m = await message.channel.send("esta seu respostar");
  m = await message.channel.send("yes no");
  if (comando === "Yes") {
    const m = await message.channel.send("certa");
    m.edit(`voce acertou a respotar`);
  }
}


    

});

client.login(config.token);
