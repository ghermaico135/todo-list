/** @format */

import './style.css';
/* eslint-disable */
import { addList, todoTask, removeHandler } from './asset/js/add.js';
import { showList } from './asset/js/showList.js';
/* eslint-disable */

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#textInput');


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

document.addEventListener('click', (e) =>{
  if(e.target.classList.contains('description')){
      e.target.addEventListener('change', () =>{
        // console.log(e.target.value)
        let tasks = JSON.parse(localStorage.getItem('todoTask')) 
        let newTasks = []
       tasks.forEach((task)=>{
        console.log(e.target.id)
            if(e.target.id == task.index){
              task.description = e.target.value
            }
            newTasks.push(task)  
        })
        localStorage.setItem('todoTask',JSON.stringify(newTasks))
        showList(newTasks)
      })
   
  }
  })

export default input;
