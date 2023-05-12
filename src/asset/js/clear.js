/** @format */
/* eslint-disable */
import { showList } from './showList';
/* eslint-disable */

const clear = (todoTask) => {
  todoTask = todoTask.filter((todo) => todo.completed !== true);
  //set new todo task to localstorage
  let newTask = []
  todoTask.forEach((todo) =>{
    newTask.push(todo)
  })
 
  console.log(newTask)
  localStorage.setItem('todoTask', JSON.stringify(newTask));
  console.log(newTask);
  showList(newTask);
};

export default clear;
