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

//allows objects to emit named events that other code can listen to.

const logger = new Logger();
const logFile = './eventlog.txt';

//Specifies the path to a file named eventlog.txt where log entries will be saved.

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} = ${event.message}
    \n`;
    fs.appendFileSync(logFile, logMessage);
}

logger.on('message',logToFile);

//Creates a message string with the current timestamp and we are appending that to the logFile as a log message 

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Current memory usage : ${memoryUsage.toFixed(2)}%`);
}, 3000)

//Every 3 seconds, this function calculates the percentage of free memory (using Node's os module) and logs it.


logger.log('Application started');
logger.log('Application event occured');

