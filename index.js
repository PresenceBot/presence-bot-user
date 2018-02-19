const Discord = require('discord.js');
const { Pool } = require('pg');

const EventListener = require('./EventListener');
const EventLog = require('./EventLog');

const { DB_CONNECTION, BOT_TOKEN } = process.env;

if(typeof DB_CONNECTION === 'undefined') {
    throw new Error('Environment variable DB_CONNECTION must be set to a valid Postgres database connection string');
}
if(typeof BOT_TOKEN === 'undefined') {
    throw new Error('Environment variable BOT_TOKEN must be set to a valid Discord user bot connection token');
}

const pool = new Pool({ connectionString: DB_CONNECTION });
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
});

const bot = new Discord.Client();
bot.login(BOT_TOKEN);

EventListener.listen(bot, new EventLog(pool));
