import { Client,EmbedBuilder,IntentsBitField } from "discord.js";
import axios from 'axios';
import 'dotenv/config';
const getData = async () =>{
    await axios.get('https://reqres.in/api/users?page=2').then(res =>{
        console.log(res.data.data[0])
    })
}
const client =new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});
client.on('ready',(c)=>{
    console.log(`${c.user.username} is online`)
})
client.on(`messageCreate`,(message)=>{
    if(message.content === 'hello'){
        message.reply('hey In 2010, two years after adopting Kabosu from a puppy mill where she would otherwise have been put down, Sato took a picture of her pet crossing her paws on the sofa.She posted that image – with the fluffy shiba inu giving the camera a beguiling look – on her blog, from where it spread to online forum Reddit and became a meme that bounced from college bedrooms to office e-mail chains.')
    }
    
})

client.on('interactionCreate',(interaction)=>{
    if(!interaction.isChatInputCommand()) return;
    console.log(interaction.commandName)

    if(interaction.commandName=== 'hey'){
        interaction.reply('hey')
    }
    if(interaction.commandName=== 'ping'){
        interaction.reply('pong')
        getData()
    }
    if(interaction.commandName=== 'btc_gas'){
        const embed = new EmbedBuilder()
        .setTitle('BTC Gas Tracker')
        .setDescription('BTC Gas Tracker')
        .setColor('Yellow')
        .addFields({
            name:'First title',
            value:'Xnow',
            //inline:true
        })
        .addFields({
            name:'second title',
            value:'Xnow',
            //inline:true
        })
        .addFields({
            name:'Third title',
            value:'Xnow',
            //inline:true
        })
        .addFields({
            name:'Fourth title',
            value:'Xnow',
            //inline:true
        })
        interaction.reply({embeds:[embed]})
    }
})


client.login(process.env.TOKEN);