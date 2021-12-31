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
var buttonEl = document.querySelector("#save-task");
// go into the DOM and continue searching until finding the ul
// with the id #tasks-to-do and assign it tasksToDoEl (the document object representation 
// of the ul unordered list element)
var tasksToDoEl = document.querySelecto("#tasks-to-do");


var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };
  
  buttonEl.addEventListener("click", createTaskHandler);
}

