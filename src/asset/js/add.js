/** @format */
import setItem from './storage.js';

const input = document.querySelector('#textInput');
const addList = (todoTask) => {
  todoTask.push({
    index: todoTask.length + 1,
    description: input.value,
    completed: false,
  });

  setItem(todoTask);
};

export {
  addList, input,
};