const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// Add task
addButton.addEventListener('click', () => {
  const taskText = inputField.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.classList.add('deleted');
    setTimeout(() => {
      li.remove();
    }, 300); // Delay to allow the fade-out animation
  });

  // Toggle completed task
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  todoList.appendChild(li);
  inputField.value = ''; // Clear the input field
});
