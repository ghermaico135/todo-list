import { showList } from './showList.js';

const clear = (todoTask) => {
  todoTask = todoTask.filter((todo) => todo.completed !== true);
  // set new todo task to localstorage
  const newTask = [];
  todoTask.forEach((todo) => {
    newTask.push(todo);
  });
console.log(newTask)
  localStorage.setItem('todoTask', JSON.stringify(newTask));

  showList(newTask);
};

export default clear;
