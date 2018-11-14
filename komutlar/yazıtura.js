const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"YAZI-TURA:__TURA__**",
	"YAZI-TURA:__YAZI__**"
];

exports.run = function(client, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "YAZI-TURA:__YAZI__**") {

		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://hizliresim.com/LlPgdo")
		message.channel.send(embedyazı);

	} else if (cevap === "YAZI-TURA:__TURA__**") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://hizliresim.com/jgJ1Jm")
		message.channel.send(embedtura);

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura Atar.',
  usage: 'yazıtura'
};
