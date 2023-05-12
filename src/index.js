/** @format */

import './style.css';
import setItem from './asset/js/storage.js';
import {
  addList, input,
} from './asset/js/add.js';
/* eslint-disable */
import { showList } from './asset/js/showList.js';

let todoTask = JSON.parse(localStorage.getItem('todoTask')) || [];
export default todoTask;
/* eslint-disable */
const addBtn = document.querySelector('#addBtn');

window.addEventListener('load', () => {
  const tasks = todoTask;
  showList(tasks);
});

// add
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  addList(todoTask);
  showList(todoTask);
  input.value = '';
});

// remove function
const removeHandler = (index) => {
  todoTask = todoTask.filter((todo) => Number(todo.index) !== Number(index));
  setItem(todoTask);
};
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
      const tasks = JSON.parse(localStorage.getItem('todoTask'));
      // todoTask
      const newTasks = [];
      tasks.forEach((task) => {
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

