"use strict"

import { addTask, removeTask, saveTask } from "./components/manageTask";
import { renderTask } from "./components/renderTask";
import './css/style.css';

const initiateWebsite = () => {
    const content = document.querySelector('#content');
    const modal = document.querySelector('.modal');
    const span = document.querySelector('.close');




    document.querySelector('#addBtn').addEventListener('click', addTask);
    document.querySelector('#form1').addEventListener('submit', saveTask);
    document.querySelector('.close').addEventListener('click', ()=>{document.querySelector('#modal1').style.display = 'none'});
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
           modal.style.display = 'none';
        }
    });
    renderTask();
}

initiateWebsite();
