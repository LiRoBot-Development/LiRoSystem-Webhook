const Discord = require('discord.js');
const config = require('./config.json');
const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);
webhookClient.send('hi test test test')
