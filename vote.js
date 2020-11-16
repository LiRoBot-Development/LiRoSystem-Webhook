// yes, ik this doesnt work, its teporary.
const DBL = require('dblapi.js');
const dbl = new DBL(config.dbltoken, { webhookPort: 5000, webhookAuth: config.dblauth});


dbl.webhook.on('ready', hook => {
    console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
    const embed = new Discord.MessageEmbed()
    .setTitle('User voted!')
    .setDescription(`Thanks to ${vote.user} for voting!`)
    .setColor('#0099ff');
    console.log(`User with ID ${vote.user} just voted!`);
    webhookClient.send('Vote!', {
    username: 'LiRoSystem',
    avatarURL: 'https://i.imgur.com/HtEs51y.png?1',
    embeds: [embed],
    });
});