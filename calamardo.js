const Discord = require("discord.js");
const config = require("./config.json");

const  client = new Discord.Client();

client.on("ready", () => {
   console.log("IM RDY CONCHETUMARE!");
});
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

    if (message.content.startsWith("!play")) {
    message.channel.send("y porque no me tocai la pichula mejor ql");
  } else {
    if (message.content.startsWith("!porn")){
      message.channel.send("metete a xvideos mejor pajero conchetumare");
    }
  }
});
client.login(config.token);
