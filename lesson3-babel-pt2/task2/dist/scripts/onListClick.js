import { deleteTask, getTaskList } from './taskGateway.js';
import { changeCompletedTask } from './updateTask.js';
import { renderListItems } from './renderer.js';
import { setItem } from './storage.js';
export const onListClick = event => {
  const deleteBtn = event.target.classList.contains('list-item__delete-btn');

  if (deleteBtn) {
    const taskId = event.target.dataset.id;
    deleteTask("".concat(taskId)).then(() => getTaskList()).then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
  }

  ;
  changeCompletedTask();
};