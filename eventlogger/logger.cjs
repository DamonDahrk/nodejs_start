const fs = require('fs');
const os = require ('os');

//The os module provides functions to get info about your OS
// as memory, CPU info, user directories,

const EventEmitter = require('events');

//The EventEmitter class provides a mechanism to create, emit
// listen for custom events in your app USING the observer pattern.

class Logger extends EventEmitter {
    log(message) {
        this.emit('message',{message});
    }
}

const logger = new Logger();
const logFile = './eventlog.txt';

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} = ${event.message}
    \n`;
    fs.appendFileSync(logFile, logMessage);
}

logger.on('message',logToFile);

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Current memory usage : ${memoryUsage.toFixed(2)}%`);
}, 3000)
logger.log('Application started');
logger.log('Application event occured');