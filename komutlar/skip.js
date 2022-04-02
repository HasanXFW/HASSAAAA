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
        
    const err0 = new RichEmbed()
      .setColor("#579CF4")
      .setDescription(`:x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir. Eğer ses kanalındaysanız çıkıp tekrar bağlanmayı deneyin.**`) 
    if (!voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("#579CF4")
    .setDescription(`:x: Şu anda çalan şarkı yok!`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("#579CF4")
    .setDescription(`Şarkı atlandı!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)
if(!message.member.hasPermission("KİCK_MEMBERS")) return message.reply(":x: **This command requires you to either have a role named** `DJ` **or** `Manage Channels` **permission to use it** (being alone with the bot also works)");
};

exports.conf = {
    enabled: true,
    aliases: ['sk'],
    permLevel: 0
};

exports.help = {
    name: 'skip',
    description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
    usage: 'geç'
};