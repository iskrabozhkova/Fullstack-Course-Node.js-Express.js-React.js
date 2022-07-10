const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter{
    constructor(){
        super();
        console.log("My Event Emitter created successfully");
    }
}

const mee = new MyEventEmitter();
mee.on("myEvent", event => {
    console.log('Event listener recieved ' + event);
})
setTimeout(() => {
    mee.addListener("myEvent", event => {
        console.log('Event listener 2 recieved ' + event);
    })
}, 1000)

for(let i = 0; i < 5; i++){
    setTimeout(() => mee.emit('myEvent', 'Hello event ' + i), i* 500);
}
