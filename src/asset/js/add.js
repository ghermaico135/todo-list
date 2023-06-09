/** @format */
import input from "../../index.js";

let todoTask = JSON.parse(localStorage.getItem("todoTask")) || [];

const addList = (todoTask) => {
	todoTask.push({
		index: todoTask.length,
		description: input.value,
		completed: false,
	});

	localStorage.setItem("todoTask", JSON.stringify(todoTask));
};

const removeHandler = (index) => {
	todoTask = todoTask.filter((todo) => Number(todo.index) !== Number(index));

	localStorage.setItem("todoTask", JSON.stringify(todoTask));
};

export { todoTask, addList, removeHandler };
