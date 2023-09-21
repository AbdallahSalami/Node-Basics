/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}
const tasks = [
  { title: "do homework", done: false },
  { title: "take a medicine", done: true },
];

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var textParts = text.trim().split(" ");
  if (textParts[0] === "quit" || textParts[0] === "exit") {
    quit();
  } else if (textParts[0] === "hello") {
    hello(text);
  } else if (textParts[0] === "list") {
    list();
  } else if (textParts[0] === "add") {
    add(text.substring(4).trim());
  } else if (textParts[0] === "remove") {
    remove(textParts[1]);
  } else if (textParts[0] === "edit") {
    edit(text);
  } else if (textParts[0] === "check") {
    checkTask(textParts[1]);
  } else if (textParts[0] === "uncheck") {
    uncheckTask(textParts[1]);
  } else if (textParts[0] === "help") {
    help();
  } else {
    unknownCommand(text);
  }
}

function list() {
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title} [${task.done ? "✓" : " "}]`);
  });
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

// add function
function add(task) {
  if (task.trim() !== "") {
    tasks.push({ title: task, done: false });
    console.log(`Task "${task}" added.`);
  }
}

// remove function
function remove(index) {
  let taskIndex = parseInt(index) - 1;
  if (!index) {
    taskIndex = -1;
  }

  if (isFinite(taskIndex) && taskIndex >= -1 && taskIndex <= tasks.length) {
    const removedTask = tasks.splice(taskIndex, 1);
    console.log(`Removed task: "${removedTask[0].title}".`);
  } else {
    console.log("Invalid task index. Task does not exist.");
  }
}

/// edit function
function edit(text) {
  const textParts = text.trim().split(" ");
  let taskIndex, newText;

  if (textParts.length < 2) {
    console.log("Invalid format. Use 'edit index new text'.");
    return;
  }

  taskIndex = parseInt(textParts[1]);
  if (isNaN(taskIndex)) {
    newText = text.substring(textParts[0].length).trim();
    taskIndex = tasks.length - 1;
  } else {
    newText = text
      .substring(textParts[0].length + textParts[1].length + 2)
      .trim();
    taskIndex--;
  }

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].title = newText;
    console.log(`Task ${taskIndex + 1} updated to: "${newText}".`);
  } else {
    console.log("Invalid task index. Task does not exist.");
  }
}

// check task
function checkTask(index) {
  const taskIndex = parseInt(index);
  if (isFinite(taskIndex) && taskIndex >= 1 && taskIndex <= tasks.length) {
    tasks[taskIndex - 1].done = true;
    console.log(`Task ${taskIndex} marked as done.`);
  } else {
    console.log("Invalid task index. Task does not exist.");
  }
}

// uncheck task
function uncheckTask(index) {
  const taskIndex = parseInt(index);
  if (isFinite(taskIndex) && taskIndex >= 1 && taskIndex <= tasks.length) {
    tasks[taskIndex - 1].done = false;
    console.log(`Task ${taskIndex} marked as not done.`);
  } else {
    console.log("Invalid task index. Task does not exist.");
  }
}

/**
 * Says hello1
0 *
 * @returns {void}
 */

// welcome function to type "hello X!"  X can anything

function hello(name) {
  var name1 = name.trim();

  console.log(name1 + "!");
}

// help funiction to know how  you can use this app
function help() {
  console.log(
    "Available commands:\n" +
      "- 'hello x': Print hello message for the provided name.\n" +
      "- 'list': List all tasks.\n" +
      "- 'add x': Add a task 'x'.\n" +
      "- 'remove [index]': Remove a task at the specified index.\n" +
      "- 'quit' or 'exit': Quit the application."
  );
}

/**
 * Exits the applicationc
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Abdallah Salami");
