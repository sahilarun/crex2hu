const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "leave",
    aliases: ["dc"],
    category: "Music",
    description: "Leave the Voice channel and reset the player.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
   

   
		const { channel } = message.member.voice;
       
        const player = message.client.manager.get(message.guild.id);

try {
    if(player.get('nowplayingMSG'))
    {
      let mess = player.get('nowplayingMSG')
        if(mess.deletable){

            mess.delete();
    }
    }
    }catch(err)  { 
    
  }

        const emojiLeave = message.client.emoji.leave;

        player.destroy();
        
        let thing = new MessageEmbed()
            .setColor("#2f3136")
            .setDescription(`<:Success:1074564018385211424> | **I Have Left <#${channel.id}>**`)
          return message.channel.send({embeds: [thing]});
	
    }
};