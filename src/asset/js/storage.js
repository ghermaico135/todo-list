// let todoTask = JSON.parse(localStorage.getItem('todoTask')) || [];

const setItem = (Items) => localStorage.setItem('todoTask', JSON.stringify(Items));

export default setItem;