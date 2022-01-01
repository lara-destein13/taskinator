// // console.log(window.document);

// // // console.dir(window.document);

// // // document is the root DOM element, which represents the index.html file.
// // // we can use querySelector() to select any element in the HTML,
// // // including the <button> that we need here.
// // // own words: querySelector says go into the dom inside the window 
// // // and search until you find button then select it.
// // var btn = window.document.querySelector("button");
// // console.dir(btn);

// // var body = window.document.querySelector("body");
// // console.dir(body);

// // // to select a class attribute, you need to add a dot (.) prefix,
// // // as shown: document.querySelector(".btn"); 
// // // behaves the same as above code producing the same object. 
// // // Don't require window.
// // var btn = document.querySelector(".btn");
// // console.dir(btn);

// // // the textContent property returns the text content of the element
// // // in this case, it prints 'Add Task' becuase this is the content 
// // // of the button element.
// // document.querySelector("button").textContent;

// // // this selects the button by id rather than element. This
// // // allows us to add multiple buttons that behave differently
// // document.querySelector("#save-task");

// // assign the button element object representation to a variable
// // in the file.
// var buttonEl = document.querySelector("save-task");

// // in web development, we refer to user behavior-the click, in this case-as
// // an EVENT. We refer to the observation of the event as the 
// // EVENT LISTENER. And we refer to the response to the event as 
// // the EVENT HANDLER.

// // the addEventListener() method can be used by an element object
// // in this case, the buttonEl object. This method adds an event listener
// // to the <button> element. The buttonEl object was established in 
// // var buttonEl = document.querySelector("save-task"); as the
// // object representation of the <button> element. 
// // We pass two arguments into the addEventListener() function: the 
// // type of event we'll listen for--in our case, the click event-- and
// // the event response to execute when the event is triggered
// buttonEl.addEventListener("click", function() {
//     alert("button clicked");
// });

// // to dynamically create an element with JavaScript
// // var taskItemEl = document.createElement("li");
// // this creates <li></li>

// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";


// go into the DOM and continue searching until finding the button
// with the id #save-task and assign it buttonEl (the document object representation 
// of the button element)
// var buttonEl = document.querySelector("#save-task");

// go into the DOM and continue searching until finding the form with the id task-form
// and call it formEl. This is the document object representation of the form element
// var formEl = document.querySelector("#task-form");

// go into the DOM and continue searching until finding the ul
// with the id #tasks-to-do and assign it tasksToDoEl (the document object representation 
// // of the ul unordered list element)
// var tasksToDoEl = document.querySelector("#tasks-to-do");

// // a function that creates a new task item, styles the new task item, adds the text,
// // and appends this element to the task list.
// var createTaskHandler = function(event){
//     // method that instructs the browser to not carry out its default behavior.
//     // we don't want our page to refresh everytime the form submit button is pressed
//     event.preventDefault();
//     // we use square brackets [ ] in a selector to select and HTML elemennt by one
//     // of its attributes. here, we're selecting the <input> element on the page that has a 
//     // name attribute set to a value of "task-name"
//     var taskNameInput = document.querySelector("input[name='task-name']");
//     // create a DOM element object that is a list item and name it listItemEl
//     var listItemEl = document.createElement("li");
//     // use the className property to dynamically style the list items with the task-item class
//     listItemEl.className = "task-item";
//     // // use the textContent property to set the text for the list items to "this is a new task"
//     // // listItemEl.textContent = "This is a new task.";
//     // get the task name we just stored in taskNameInput and add it to the listItemEl variable
//     // Now we can see whatever we entered into the form appear as a task in the list!
//     listItemEl.textContent = taskNameInput;
//     // appends (adds something) the task list item <li> as a child to the task list <li>
//     tasksToDoEl.appendChild(listItemEl);
//   };
  
//   // on a button click, create a task. 
//   // buttonEl.addEventListener("click", createTaskHandler);

//   // instead of click used for buttons, we will use submit used for forms. 
//   // the submit listener listens for 2 events within the form: (1) when a 
//   // user clicks a button element with a type attribut that has a value of "submit"
//   // like the button we currently have in the form (2) When a user presses Enter on their 
//   // keyboard
//   formEl.addEventListener("submit", createTaskHandler);


var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);