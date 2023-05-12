/** @format */

import "./style.css";
import { addList, todoTask, removeHandler } from "./asset/js/add.js";
import { showList } from "./asset/js/showList.js";

const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#textInput");
// const clearBtn = document.querySelector("#clearBtn");

window.addEventListener("load", () => {
	showList(todoTask);
});

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addList(todoTask);
	showList(todoTask);
	input.value = "";
});

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("trashBtn")) {
		console.log(e.target);
		removeHandler(e.target.id);
		showList(todoTask);
	}
});

document.addEventListener("change", () => {
	const paragraph = document.querySelectorAll(".description");
	paragraph.forEach((p) => {
		p.addEventListener("keyup", (e) => {
			todoTask.forEach(() => {
				let newValue = e.target.input.value;
				console.log(input.value);
				todoTask.description = newValue;
				localStorage.setItem("todoTask", JSON.stringify(todoTask));
			});
		});
	});
});

export default input;
