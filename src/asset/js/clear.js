/** @format */
/* eslint-disable */
import { showList } from './showList';
/* eslint-disable */

const clear = (todoTask) => {
  todoTask = todoTask.filter((todo) => todo.completed !== true);
  localStorage.setItem('todoTask', JSON.stringify(todoTask));
  console.log(todoTask);
  showList(todoTask);
};

export default clear;
