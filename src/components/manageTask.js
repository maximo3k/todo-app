import { renderTask } from "./renderTask";

const taskObject = (e) => {
  let title = e.target[0].value;
  let description = e.target[1].value;
  let date = e.target[2].value;
  let priority = e.target[3].value;

  return { title, description, date, priority };
};

const addTask = () => {
  document.querySelector("#modal1").style.display = "block";
};

const saveTask = (e) => {
  //create task object and save
  let existingObj = localStorage.getItem("tasks");
  let temp = [];
  let newObj = taskObject(e);

  if (existingObj !== null) {
    temp = [...JSON.parse(existingObj)];
  }

  temp.push(newObj);
  localStorage.setItem("tasks", JSON.stringify(temp));

  //close modal
  document.querySelector("#modal1").style.display = "none";
  //refresh page
  document.getElementById("form1").reset();
  renderTask();
  e.preventDefault();
};

const removeTask = (i) => {
  let existingObj = localStorage.getItem("tasks");
  let temp = [];
  temp = [...JSON.parse(existingObj)];
  temp.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(temp));
  renderTask();
};

export { addTask, saveTask, removeTask };
