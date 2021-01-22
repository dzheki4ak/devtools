import { renderListItems } from './renderer';
import { setItem } from './storage';
import { createTask, getTaskList } from './taskGateway';

export const additionListTasks = () => {
  const inputTaskElem = document.querySelector('.task-input');

  const text = inputTaskElem.value;

  if (!text) {
    return;
  }

  inputTaskElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTaskList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
};
