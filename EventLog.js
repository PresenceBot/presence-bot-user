module.exports = class EventLog {
    constructor(pool) {
        this.pool = pool;
    }

    log(eventName, eventData) {
        this.pool.query('SELECT * FROM public."Event"').then(({rows}) => {
            console.log(JSON.stringify(rows, null, 4));
        });
    }
}
