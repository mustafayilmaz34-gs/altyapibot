const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
    const narcosmisafir = message.guild.roles.cache.find(r => r.id === "KAYITSIZ İD"); 
    const nkayıterkek = message.guild.roles.cache.find(r => r.id === "ERKEK ROL İD"); 
  
  const log = message.guild.channels.cache.find(c => c.id === "LOG İD"); 
  const tag = "TAG";
  if(!message.member.roles.cache.array().filter(r => r.id === "KAYIT YETKİLİSİ İD")[0]) { 
    return message.channel.send("Botumu Bozucan Knk Yetkin Yok Napıyosun?");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Kayıt Edebilmem İçin Bir ``İsim`` Girmelisin.**")
      if(!yas) return message.channel.send("**Kayıt Edebilmem İçin Bir ``Yaş`` Girmelisin.**")
    c.roles.add(nkayıterkek)
    c.roles.remove(narcosmisafir)
    c.setNickname(`${tag} ${nick} , ${yas}`)
     const narcoscode = new Discord.MessageEmbed()
    .setDescription(`
:white_check_mark: Kayıt Başarılı :white_check_mark:
• Kaydı Yapılan Üye: **${c.user.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}
• Verilen Rol: ${nkayıterkek}
`)
         .setFooter('Mustafa Beta Kayıt Sistemi')
     message.channel.send(narcoscode)
     
    

    const narcosc = new Discord.MessageEmbed()
    .setDescription(`
**Bir Erkek Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**
• Kaydı Yapılan Üye: **${c.user.tag}**
• Kaydı Yapan Yetkili: **${message.author.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}
**Rol Bilgileri Aşağıda Yazmakta.**
• Alınan Rol: ${narcosmisafir}
• Verilen Rol: ${nkayıterkek}
`)
    .setFooter('Mustafa Beta Kayıt Sistemi')
   
    log.send(narcosc)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e","bay"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};