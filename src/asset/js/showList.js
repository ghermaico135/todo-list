/** @format */
/* eslint-disable */
import { todoTask } from './add.js';
/* eslint-disable */

const todoListContainer = document.querySelector('#todo-list-container');

const showList = (todoTask) => {
  let content = '';
  todoTask.forEach((todo) => {
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

  todoListContainer.innerHTML = content;
};

export { showList, todoTask };