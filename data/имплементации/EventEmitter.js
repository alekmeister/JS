class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [listener];
        } else {
            this.events[event].push(listener);
        }
        return this;
    }

    off(event, listener) {
        if (!this.events[event]) return this;
        this.events[event] = this.events[event].filter(el => el !== listener);
        return this;
    }

    emit(event, ...params) {
        if (!this.events[event]) return this;
        this.events[event].forEach(el =>{
            el(...params)
        });
        return this;
    }
}

const cb1 = () => console.log('cb1')
const cb2 = () => console.log('cb2')
const cb3 = () => console.log('cb3')
const cb4 = () => console.log('cb4')

const emitter = new EventEmitter()

emitter
    .on('event', cb1) // подписка коллбэка cb1 на событие 'event'
    .on('event', cb2)
    .on('event', cb3)
    .on('event', cb4)
    .emit('event') // срабатывание события 'event'
    // 'cb1'
    // 'cb2'
    .off('event', cb2) // отписка коллбэка cb2 от события 'event'
    .emit('event', 'some', '123')



