module.exports = {
    listen: (bot, logger) => {
        bot.on('raw', ({t, s, op, d}) => {
            if(op === 0) {
                // Workaround for Postgres connector circular reference bug
                logger.log(t, JSON.stringify(d));
            }
        });
    }
};
