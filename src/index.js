// Function to add item to list and display
function buildToDo(task) {
  // Create a new li element
  const li = document.createElement('li');
  
  // Add the task as the textContent
  li.textContent = task;
  
  // Select the task list (ul element with id "tasks")
  const taskList = document.getElementById('tasks');
  
  // Append the li element to the task list
  taskList.appendChild(li);
}

// Select the form element
const form = document.getElementById('create-task-form');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Get the value from the input field
  const taskDescription = form.elements['new-task-description'].value;
  
  // Call function to add the task to the list
  buildToDo(taskDescription);
  
  // Clear the input field after submission
  form.reset();
});