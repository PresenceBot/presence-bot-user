const QUERY_INSERT_EVENT = 'INSERT INTO public."Event"(name, data) VALUES($1, $2)';

module.exports = class EventLog {
    constructor(pool) {
        this.pool = pool;
    }

    log(eventName, eventData) {
        this.pool.query(QUERY_INSERT_EVENT, [eventName, eventData]).catch(error => {
            console.error(error);
        });
    }
}
