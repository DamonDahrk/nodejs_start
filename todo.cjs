const fs = require("fs");
const filePath = "./tasks.json";

// essentially we are using the nodejs file handling properties
//so like "fs" means that and tasks json cmon we learnt stringify
//api needs that json translation to store values and all so we are
//storing it in a seperate file 


const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

//fs.readFileSync(filePath) reads the file located at filePath 
// synchronously, and returns the contents as a buffer.
// dataBuffer.toString() converts the buffer data to a string.
// JSON.parse(dataJSON) turns the JSON string back into a JavaScript array/object.


const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};


//we are saving the data to like the path to save it atleast

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added", task);
};

//we are first loading the tasks to get the current array
// and then we are pushing the current pask to the array tasks
// we updating the updated task list to the file

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

//we are loading the current tasks first
// foreach to iterate over each task in the array or somethin
// printing each task to console prefixed by the position and dash
// followed by actual task text. 

const command = process.argv[2];
const argument = process.argv[3];

//trynna get the command line commands dont get scared of
//2 and 3 cuz 0 and 1 are the command line location where we 
// run the stuff and the file we are writing this code at

if(command === "add") {
    addTask(argument);
}else if (command === "list") {
    listTasks();
} else if (command ===  "remove") {

    removeTask(parseInt(argument));
} else {
    console.log("Command not found !"); 
}
