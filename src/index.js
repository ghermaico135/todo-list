/** @format */

import './style.css';
import {
  todoTask, setItem, input, addList, removeHandler, showList,
} from './asset/js/utility.js';

const addBtn = document.querySelector('#addBtn');

// add
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  addList(todoTask);
  showList(todoTask);
  input.value = '';
});

// showAll element at loading
window.addEventListener('load', () => {
  const tasks = todoTask;
  showList(tasks);
});

// remove eventListner
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('trashBtn')) {
    removeHandler(e.target.id);
    showList(todoTask);
  }
});

// edit
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('description')) {
    e.target.addEventListener('change', () => {
      // const tasks = JSON.parse(localStorage.getItem('todoTask'));
      // todoTask
      const newTasks = [];
      todoTask.forEach((task) => {
        if (Number(e.target.id) === Number(task.index)) {
          task.description = e.target.value;
        }
        newTasks.push(task);
      });

      setItem(newTasks);
      showList(newTasks);
    });
  }
});
