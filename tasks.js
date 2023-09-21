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
const tasks = ["do homework", "take a medicine"];

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
  } else if (text) {
  } else if (textParts[0] === "help") {
    help();
  } else {
    unknownCommand(text);
  }
}

function list() {
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
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

function add(task) {
  if (task.trim() !== "") {
    tasks.push(task);
    console.log(`Task "${task}" added.`);
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
    "type:'hello  x' to get hello x! \n---- 'quit'  or  'exit' to Qutting  "
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
