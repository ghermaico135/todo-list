/** @format */
/* eslint-disable */
import './style.css';
import { input,addList, todoTask, removeHandler } from './asset/js/add.js';
import { showList } from './asset/js/showList.js';
import checkList from './asset/js/checklist.js';
import clear from './asset/js/clear.js';

/* eslint-disable */

const addBtn = document.querySelector('#addBtn');

const clearBtn = document.querySelector('#clearBtn');
const refreshBtn = document.querySelector('.refreshBtn')

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
    showList(todoTask);
  }
});

// document.addEventListener('change', () => {
//   const paragraph = document.querySelectorAll('.description');
//   paragraph.forEach((p) => {
//     p.addEventListener('keyup', (e) => {
//       todoTask.forEach(() => {
//         const newValue = e.target.input.value;
//         console.log(input.value);
//         todoTask.description = newValue;
//         localStorage.setItem('todoTask', JSON.stringify(todoTask));
//       });
//     });
//   });
// });

document.addEventListener('click', (e) => {
  checkList(e);
});

clearBtn.addEventListener('click', (e) => {
  clear(todoTask);
  removeHandler(e.target.id);
});

refreshBtn.addEventListener('click', () =>{
  showList(todoTask)
})
export default input;
