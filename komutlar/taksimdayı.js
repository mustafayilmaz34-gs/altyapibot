const Discord = require("discord.js");

exports.run = (client, message) => {
  const narcosembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Taksim Dayı")
 .setImage("https://cdn.discordapp.com/attachments/786923783948206130/791671898433519656/maxresdefault.png")
    .setFooter("Hello");
  message.channel.send(narcosembed);
};
exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["dayı", "taksim"],
  permLevel: 0
};
exports.help = {
  name: "taksimdayı",
  description: "taksim dayı resmi atar",
  usage: "taksimdayı"
};