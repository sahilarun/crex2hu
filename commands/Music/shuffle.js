const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "shuffle",
    category: "Music",
    description: "Shuffles the queue.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
    
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#2f3136")
                .setDescription("<:cross1:1074564046134718474> | There is no music playing.");
            return message.channel.send({embeds: [thing]});
        }


        player.queue.shuffle();
        
        const emojishuffle = message.client.emoji.shuffle;

        let thing = new MessageEmbed()
            .setDescription(`${emojishuffle} Shuffled the queue`)
            .setColor("#2f3136")
        return message.channel.send({embeds: [thing]}).catch(error => message.client.logger.log(error, "error"));
	
    }
};