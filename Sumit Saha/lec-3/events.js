 const EventEmitter = require('events');
 const emitter = new EventEmitter();

 // Registe a listener for bellRing event
emitter.on('bellRing',({period, time})=>{
    console.log("We need to go. BCZ "+ period + " piriod over at "+ time);
})
 

 // raise an event
 emitter.emit('bellRing',{
    period: "Frist",
    time : "12PM"
 });

