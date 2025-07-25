const fs = require('fs');
const filePath = "./tasks.json";


const command = 

if(command === 'add'){
    addTask(argument);
}
else if(command === 'list'){
    listTasks();
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("Command not found !");
}