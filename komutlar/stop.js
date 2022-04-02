const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyC_5ebqCyvFwi2dmN8paQKnE6SEo9jNqZc');

exports.run = async (client, message, args) => {
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const a = new RichEmbed()
    .setColor("#579CF4")
    .setDescription(`:x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir. Eğer ses kanalındaysanız çıkıp tekrar bağlanmayı deneyin.**`)  
  if (!voiceChannel) return message.channel.send(a)

  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("#579CF4")
    .setDescription(`Durduruldu :pause_button:`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new RichEmbed()
    .setColor("#579CF4")
    .setDescription(`:x: Şu anda çalan şarkı yok!`)
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['d'],
    permLevel: 0
};

exports.help = {
    name: 'durdur',
    description: 'Çalan şarkıyı duraklatır.',
    usage: 'duraklat'
};