const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#579CF4')
.setTitle('» XFWBOT  Müzik  Komutları')
.setTimestamp()
.addField('» -Müzik Açar', '-play')
.addField('» -Şarkıya Devam Eder', '-devam ')
.addField('» -Şarkıyı Durdurur', '-durdur')
.addField('» -Şarkıyı Kapatır', '-stop')
.addField('» -Şarkıyı Geçersiniz', '-skip')
.addField("» -Linkler", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=959733201499193344&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.com/invite/EVCTvu295z)  `, false)
.setFooter('XFWBOT ©| xfwbot.cf', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','mz'], 
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};