require('dotenv').config({ path: './env/.env' });
const Discord = require('discord.js');
const client = new Discord.Client();

console.log('Starting discord bot');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //775398745369083935
});
client.login(process.env.TOKEN);

client.on('message', gotMessage);

function dieRoll(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function gotMessage(msg) {
    // console.log(msg);
    if (msg.content == 'Meow?') {
        msg.channel.send('Meow! :smile_cat:');
    }
    if (msg.content == 'Meow!') {
        msg.channel.send('Meow? :cat:');
    }
    if (msg.content == 'Meow!?' || msg.content == 'Meow?!') {
        msg.channel.send('Meow~ :scream_cat:');
    }
    if (msg.content.startsWith("!roll ")) {
        const pattern = /(\d+)d(\d+)/i;
        const result = msg.content.match(pattern);
        if (result) {
            msg.channel.send(`Rullar ${result[0]}:`);
            const die = result[2];
            const dieNum = result[1];
            let dieResult = '';
            for (i = 0; i < dieNum; i++) {
                let res = dieRoll(die);
                console.log(res);
                if (i != dieNum - 1) {
                    dieResult += `${res}, `;
                } else {
                    dieResult += `${res}`;
                }
            }
            msg.channel.send(`Resultat: ${dieResult}`);
        } else {
            msg.channel.send(`Rulla några riktiga tärningar istället...`);
        }
    }
    if (msg.content.startsWith("!add ")) {
        const pattern = /(\d+)\+(\d+)/i;
        const result = msg.content.match(pattern);
        if (result) {
            const answer = parseInt(result[1], 10) + parseInt(result[2], 10);
            msg.channel.send(`Svaret är ${answer}`);
        } else {
            msg.channel.send(`Det där är inga siffror ju...`);
        }
    }
    if (msg.content.startsWith("!sub ")) {
        const pattern = /(\d+)\-(\d+)/i;
        const result = msg.content.match(pattern);
        if (result) {
            const answer = parseInt(result[1], 10) - parseInt(result[2], 10);
            msg.channel.send(`Svaret är ${answer}`);
        } else {
            msg.channel.send(`Det där är inga siffror ju...`);
        }
    }
};
