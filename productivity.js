const buttonGroups = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let currentlyStyledButton = null;

    buttonGroups.forEach(group => {
      const buttons = document.querySelectorAll(`button[id^=${group}]`);
      
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          if (currentlyStyledButton && currentlyStyledButton !== button) {
            currentlyStyledButton.style.color = '';
            currentlyStyledButton.style.backgroundColor = '';
            currentlyStyledButton.style.borderColor = '';
            currentlyStyledButton.style.transform = '';
          }

          if (currentlyStyledButton === button) {
            button.style.color = '';
            button.style.backgroundColor = '';
            button.style.borderColor = '';
            button.style.transform = '';
            currentlyStyledButton = null;
          } else {
            button.style.color = 'var(--color-secondary)';
            button.style.backgroundColor = '#1e1f24';
            button.style.borderColor = '#09090a';
            button.style.transform = 'none';
            currentlyStyledButton = button;
          }
        });
      });
    }); 

document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('nextButton');
    const importanceContainer = document.getElementById('importanceContainer');
    const durationContainer = document.getElementById('durationContainer');
    const importanceButtons = document.querySelectorAll('.importanceButton');
    const myRange = document.getElementById('myRange');
    const demo = document.getElementById('demo');
    
    nextButton.addEventListener('click', () => {
        importanceContainer.style.display = 'block';
    });
    
    importanceButtons.forEach(button => {
        button.addEventListener('click', () => {
            durationContainer.style.display = 'block';
        });
    });
    
    myRange.addEventListener('input', () => {
        demo.textContent = myRange.value;
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');
  let taskIdCounter = 0; // Counter to generate unique IDs

  addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value;
      if (taskText.trim() !== "") {
          const taskItem = document.createElement('li');
          taskItem.textContent = taskText;
          taskItem.id = 'task-' + taskIdCounter++;

          const buttonContainer = document.createElement('div');
          buttonContainer.className = 'status-buttons';

          const toDoButton = createStatusButton('To Do', taskItem.id + '-todo', 'to-do');
          const doingButton = createStatusButton('Doing', taskItem.id + '-doing', 'doing');
          const doneButton = createStatusButton('Done', taskItem.id + '-done', 'done');

          buttonContainer.appendChild(toDoButton);
          buttonContainer.appendChild(doingButton);
          buttonContainer.appendChild(doneButton);

          taskItem.appendChild(buttonContainer);

          taskList.appendChild(taskItem);

          taskInput.value = "";
      }
  });

  function createStatusButton(status, id, className) {
      const button = document.createElement('button');
      button.textContent = status;
      button.id = id;
      button.className = 'status-button ' + className;
      button.addEventListener('click', function() {
          if (status === 'Done') {
              const taskItem = document.getElementById(id).closest('li');
              const buttonContainer = taskItem.querySelector('.status-buttons');
              taskItem.style.textDecoration = 'line-through';
              buttonContainer.remove();
          }
      });
      return button;
  }
});
