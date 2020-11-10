//Array to hold tasks.
var tasks = [];

//Task status 'enum'.
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// Task constructor function.
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

//Creates a new task element and adds it to the DOM
function addTaskElement (task){
    //Create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set attributes
    taskEl.setAttribute('id', task.id);

    //Add text to task element
    taskEl.appendChild(textEl);

    //Add task element to list.
    listEl.appendChild(taskEl);
}

//Click handler to add new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== '') {
        //Create a unique id.
        var id = 'item-' + tasks.length;

        //Create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //Add the task to the DOM.
        addTaskElement(task);

        //Reset
        inputEl.value = '';
    }
}

//Click handler to complete a task
function completeTask (event) {
    //Get the task element.
    var taskEl = event.target;
    var id = taskEl.id;

    //Find corresponding task in the tasks array and update status.
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (tasks.id === id) {
            task.status = taskStatus.completed;
            break;
        }
        
    }

    //Move task element from the active list to the completed list
    taskEl.remove();

document.getElementById('completed-list').appendChild(taskEl);
}

//(Optional)Key press handler to automatically click add task button.
function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

//Initialize the app
function init () {
    //Wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //Wire up the completed item click handler
    document.getElementById('active-list').onclick = completeTask;

// (Optional) Wire up the task input key press handler
document.getElementById('input-task').onkeypress = clickButton;
}

init();