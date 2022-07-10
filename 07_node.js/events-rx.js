const EventEmitter = require('events');
const rx = require('rxjs');

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
rx.interval(500).forEach(
   i => mee.addListener("myEvent", event => {
        console.log('Event listener 2 recieved ' + event);
    })
)


// for(let i = 0; i < 5; i++){
//     setTimeout(() => mee.emit('myEvent', 'Hello event ' + i), i* 500);
// }
