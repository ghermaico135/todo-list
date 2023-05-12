/** @format */

import './style.css';
import {
  addList, todoTask, removeHandler, input,
} from './asset/js/add.js';
import { showList } from './asset/js/showList.js';

const addBtn = document.querySelector('#addBtn');

window.addEventListener('load', () => {
  showList(todoTask);
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addList(todoTask);
  showList(todoTask);
  input.value = '';
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('trashBtn')) {
    removeHandler(e.target.id);
    // const tasks = JSON.parse(localStorage.getItem('todoTask'));
    // console.log(tasks);
    // let newTasks = []
    // tasks.map((index) =>{
    //   tasks.index = index
    //   newTasks.push(tasks)
    // })
    // console.log(newTasks)
    // localStorage.setItem('todoTask',JSON.stringify(newTasks))

    showList(todoTask);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('description')) {
    e.target.addEventListener('change', () => {
      const tasks = JSON.parse(localStorage.getItem('todoTask'));
      const newTasks = [];
      tasks.forEach((task) => {
        if (Number(e.target.id) === Number(task.index)) {
          task.description = e.target.value;
        }
        newTasks.push(task);
      });
      localStorage.setItem('todoTask', JSON.stringify(newTasks));
      showList(newTasks);
    });
  }
});
