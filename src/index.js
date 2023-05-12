/** @format */

import './style.css';
/* eslint-disable */
import { addList, todoTask, removeHandler } from './asset/js/add.js';
import { showList } from './asset/js/showList.js';
/* eslint-disable */

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#textInput');
// const clearBtn = document.querySelector("#clearBtn");

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
    console.log(e.target);
    removeHandler(e.target.id);
    showList(todoTask);
  }
});



export default input;
