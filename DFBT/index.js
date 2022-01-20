const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Deepfried bot is running! Whooooooooo!");
})

app.get("/", (req, res) => {
  res.send("Deepfried Bot is running in background!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "$fry") {
    message.channel.send("Let's use the frying pan!")
  }
})

client.on("message", message => {
  if(message.content === "$sub") {
    message.channel.send("Whoever you are, subscribe to Frying Pan!")
  }
})

client.on("message", message => {
  if(message.content === "$about pan") {
    message.channel.send("ABOUT FRYING PAN: hi my name is pan and I make vlogs and skits. I post about my life, coding, academics/career paths, tech industry, or whatever I find interesting. I'm currently studying computer science in university and interning as a SWE at a big tech company. I love good stories and funny content.")
  }
})

client.on("message", message => {
  if(message.content === "$about bot") {
    message.channel.send("Full info about the Deepfried Bot here: https://telegra.ph/Deepfried-Bot-12-30")
  }
})

client.on("message", message => {
  if(message.content === "$pan social") {
    message.channel.send("Social Links: https://www.twitch.tv/fryingpanlive, https://www.youtube.com/c/FryingPan")
  }
})

client.on("message", message => {
  if(message.content === "$creator") {
    message.channel.send("airpod shotty#5001 created the Deepfried Bot for Frying Pan (MADE FOR HACKATHON).")
  }
})

client.on("message", message => {
  if(message.content === "$deepfriedbot img") {
    message.channel.send("https://telegra.ph/file/b71c504374cace025f2a9.png")
  }
})

client.on("message", message => {
  if(message.content === "$meme") {
    message.channel.send("https://telegra.ph/file/23a1d89accd933fd8438f.jpg")
  }
})

client.on("message", message => {
  if(message.content === "$creatorfact") {
    message.channel.send("airpod shotty#5001 is a Gamer who uses a 2015 Macbook Pro for everything.")
  }
})

client.on("message", message => {
  if(message.content === "$creator fav word") {
    message.channel.send("airpod shotty#5001's favorite word: airpods")
  }
})

client.on("message", message => {
  if(message.content === "$help") {
    message.channel.send("You can go see the full list of commands on this Telegra.ph page: https://telegra.ph/Commands-for-Deepfried-Bot-12-30")
  }
})

client.on("message", message => {
  if(message.content === "$cat with gun") {
    message.channel.send("https://telegra.ph/file/d3b597db184f82bcc1d7e.png")
  }
})

client.on("message", message => {
  if(message.content === "$pepepog") {
    message.channel.send("https://telegra.ph/file/f7409fff456ed34e812cc.gif")
  }
})

client.on("message", message => {
  if(message.content === "$69") {
    message.channel.send("https://telegra.ph/file/87b8290f06ff193ec0f8c.gif")
  }
})

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",
        game: {
            name: "$about bot",
            type: "PLAYING"
        }
    });
 });

client.login(process.env.token);