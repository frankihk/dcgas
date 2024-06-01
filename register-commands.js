import {ApplicationCommandOptionType, REST,Routes} from "discord.js";
import 'dotenv/config';

const commands = [
    {
        name:"hey",
        description:"Replies with hey",
    },
    {
        name:"ping",
        description:"pong",
    },
    {
        name:'btc_gas',
        description:'btc_gas'
    }
];
const rest = new REST({version:'10'}).setToken(process.env.TOKEN);
(async()=>{
    try{
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
            {body:commands}
        )
        console.log('Slash commands were registered successfully')
    }catch(e){
        console.log(`There was an error : ${e}`);
    }
})();