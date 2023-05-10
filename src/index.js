/** @format */

// import _ from 'lodash';
import './style.css';

const todoListContainer = document.querySelector('#todo-list-container');
class Todo {
  constructor() {
    this.userTodo = [
      {
        description: 'Double-tab to edit',
        completed: false,
      },
      {
        description: "Drag'n drop to reorder your list",
        completed: false,
      },
      {
        description: 'Manage all your lists in one place',
        completed: false,
      },
      {
        description: 'Resync to clear out the old',
        completed: false,
      },
    ];
  }

  showList() {
    let content = '';

    this.userTodo.forEach((todo) => {
      content += `
      <div class="todo-list">
      <input type="checkbox" id="checkBtn" check=${todo.completed}/>
      <p>${todo.description}</p>
    </div>
  
      `;
    });
    todoListContainer.innerHTML = content;
  }
}

const userTodo = new Todo();

window.addEventListener('load', () => {
  userTodo.showList();
});
