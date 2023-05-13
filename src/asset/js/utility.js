// get and setItem localStorage

const setItem = (Items) => localStorage.setItem('todoTask', JSON.stringify(Items));
const todoListContainer = document.querySelector('#todo-list-container');
const input = document.querySelector('#textInput');
/* eslint-disable */
let todoTask = JSON.parse(localStorage.getItem('todoTask')) || [];
/* eslint-disable */

// Add list
const addList = (todoTask) => {
  todoTask.push({
    index: todoTask.length + 1,
    description: input.value,
    completed: false,
  });

  setItem(todoTask);
};

// remove handler
const removeHandler = (index) => {
  todoTask = todoTask.filter((todo) => Number(todo.index) !== Number(index));
  setItem(todoTask);
};

// showlist
const showList = (todoTask) => {
  let content = '';
  todoTask.forEach((todo, index) => {
    todo.index = index + 1;
    content += `
<div class="todo-list"  id="${todo.index}">
<div class="task-list">
<input type="checkbox"  class="checkBtn" ${todo.completed ? 'checked' : null} id="${todo.index}"/>
<input type="text" id="${todo.index}" class="description text-value"  value="${todo.description}" />
</div>
<div> 
<img class="trashBtn" src="https://img.icons8.com/plasticine/100/trash--v1.png" alt="trash--v1" id="${todo.index}"/>
</div>
</div>

    `;
  });

  setItem(todoTask);

  todoListContainer.innerHTML = content;
};

export {
  todoTask, setItem, input, addList, removeHandler, showList,
};