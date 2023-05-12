/** @format */

import { showList, todoTask } from './showList.js';

// const description = document.querySelector('.description');
const checkList = (e) => {
  if (e.target.classList.contains('checkBtn')) {
    todoTask.forEach((todo) => {
      if (todo.index === +e.target.id) {
        if (e.target.checked) {
          todo.completed = true;
        } else {
          todo.completed = false;
        }
      }
    });

    localStorage.setItem('todoTask', JSON.stringify(todoTask));

    showList(todoTask);
  }
};

export default checkList;
