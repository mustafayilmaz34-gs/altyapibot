const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

 
    const say = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("👥 Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("🤖 Sunucudaki Bot Sayısı", message.guild.members.cache.filter(m => m.user.bot).size)
        .addField("🌐 Çevrimiçi üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "offline").size)
        .addField("💤 Çevrimdışı üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "offline").size)

    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'kayıt-say',
    description: 'Say',
 }