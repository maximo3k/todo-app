import { removeTask } from "./manageTask";

const renderTask = () => {
  clearContent();
  // console.log('get item')

  if (localStorage.getItem("tasks").length > 2) {
    let taskStr = localStorage.getItem("tasks");
    let taskArr = JSON.parse(taskStr);

    for (let i = 0; i < taskArr.length; i++) {
      const taskObj = taskArr[i];
      const priorityOutput = {
        high: "High Priority",
        medium: "Medium Priority",
        low: "Low Priority",
      };

      //create a card for each task
      const card = document.createElement("div");
      const taskBox = document.createElement("div");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const dueDate = document.createElement("p");
      const priority = document.createElement("p");
      const priorityBox = document.createElement("div");
      const deleteTask = document.createElement("span");

      card.classList.add("card");
      taskBox.classList.add("task-item");
      deleteTask.classList.add("delete-task");
      title.classList.add("task-list-item", "task-title");
      description.classList.add("task-list-item");
      dueDate.classList.add("task-list-item");
      // priority.classList.add('task-list-item');
      priorityBox.classList.add("priority-box");
      priorityBox.classList.add(taskObj.priority);

      title.innerHTML = taskObj.title;
      description.innerHTML = taskObj.description;

      if (!taskObj.date) {
        dueDate.innerHTML = "Due Date: Not specified";
      } else {
        dueDate.innerHTML = "Due Date: " + taskObj.date;
      }

      priority.innerHTML = priorityOutput[taskObj.priority];
      deleteTask.innerHTML = "&times;";
      deleteTask.addEventListener("click", () => {
        removeTask(i);
      });

      priorityBox.appendChild(priority);
      taskBox.append(deleteTask, title, description, dueDate);
      card.append(taskBox, priorityBox);

      document.querySelector("#task-board").appendChild(card);
    }
  } else {
    const alertBox = document.createElement("div");
    const message = document.createElement("h1");
    message.innerHTML = "no tasks yet...";
    alertBox.classList.add("no-tasks");

    alertBox.appendChild(message);
    document.querySelector("#task-board").appendChild(alertBox);
  }
};

const clearContent = () => {
  let contentArr = document.querySelectorAll(".card");
  contentArr.forEach((item) => {
    item.remove();
  });
  let text = document.querySelector(".no-tasks");
  if (text) {
    text.remove();
  }
};

export { renderTask };
