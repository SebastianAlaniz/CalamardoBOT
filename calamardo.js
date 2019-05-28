
const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("IM RDY CULIAITO!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "play")) {
    message.channel.send("y porque no me tocai la pichula mejor conchetumare!");
  } else
  if (message.content.startsWith(prefix +"porn")) {
    message.channel.send("metete a xvideos mejor pajero conchetumare");
  }
});
client.login(config.token);
