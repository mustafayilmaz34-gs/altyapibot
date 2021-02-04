const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Mustafa Beta Komut Sistemleri')
.setTimestamp()
.addField('» m!adamol', 'adam olursun')
.addField('» m!ağla', 'Botu ağlatırsın')
.addField('» m!atatürk', 'Atatürkün fotorafını atar')
.addField('» m!hapishane', 'hapse girersin')
.addField('» m!havadurumu', 'Havadurumunu gösterir')
.addField('» m!hediye-ver', 'hediye verirsin')
.addField('» m!ilginçbilgi', 'İlginç bilgi verir')
.addField('» m!intihar-et', ' intihar edersin')
.addField('» m!kahve', 'kahve içersin')
.addField('» m!polisiara', 'polisi ararsın')
.addField('» m!renkara', 'renk ararsın')
.addField('» m!şanslısayım', 'şanslı sayını tahmin eder')
.addField('» m!songörülme', 'etiketledin kişinin son mesaj tarihini söyler')
.addField('» m!sorusor', 'bota istedin soruyu sorarsın')
.addField('» m!taksimdayı', 'taksim dayının fotosunu atar')
.addField('» m!tersyaz', 'yazdın yazıyı ters yazar')
.addField('» m!yazı-yaz', 'bota yazı yazdırırsın')
.addField('» m!zarat', 'zar atarsın')
.addField('» m!kayıtyardım', 'Kayıt Yardım Komutlarını Görürsün')
.addField('» m!say', 'Sunucu İstatistiklerini Görürsün')
.addField('» m!kayıt-say(BAKIMDA)', 'Kayıt İstatistiklerini Görürsün')

.setFooter('©2021 Mustafa Beta', client.user.avatarURL())
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};