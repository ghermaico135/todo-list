/** @format */
/* eslint-disable */
import { showList, todoTask } from './showList.js';
/* eslint-disable */

const description = document.querySelector('.description');
const checkList = (e) => {
  if (e.target.classList.contains('checkBtn')) {
    todoTask.forEach((todo) => {
      if (todo.index === +e.target.id) {
        if (e.target.checked) {
          // console.log(e.target.checked);
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
