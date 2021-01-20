import { renderListItems } from './renderer.js';
import { initTodoListHandlers } from './todoList.js';
import { getTaskList } from './taskGateway.js';
import { setItem } from './storage.js';
document.addEventListener('DOMContentLoaded', () => {
  getTaskList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderListItems();
  });
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderListItems();
  }
};

window.addEventListener('storage', onStorageChange);