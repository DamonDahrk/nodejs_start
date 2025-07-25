const fs = require('fs');
const filePath = "./tasks.json";

//fs means file system , this loads the NODEJS built in fs 
//allowing your code to read from and write to files on disk 

//you can use fs to call functions from this fs module 

//first line lets us access the file handling of NodeJs and second line
//defines path to JSON to save or retrieve our tasks

const loadTasks = () => {
    try{
        fs.readFileSync(filePath)
    }
    catch(error){
        return []
    }
}
const addTask = (task) => {}

const command = process.argv[2];
const argument = process.argv[3];

//The process.argv property returns an array containing command-line
// arguments passed, element 1 => the path to the Node.js executable.
// The second element will be the path to the JavaScript file being executed.
//  remaining elements will be the command-line arguments 
// here 2 would be the command and 3 would be the argument  -> what we need


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





