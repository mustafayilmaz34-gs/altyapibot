const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Kayıt Yardım Komutları')
.setTimestamp()
.addField(' m!erkek', 'Erkek üye Kaydedersiniz')
.addField(' m!kız', 'Kız üye Kaydedersiniz')
.addField(' m!kayıt-say(BAKIMDA)', 'Üye sayısına bakarsınız')

.setFooter('Mustafa Beta', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıtyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};