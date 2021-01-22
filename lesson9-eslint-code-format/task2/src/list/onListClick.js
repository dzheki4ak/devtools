import { deleteTask, getTaskList } from './taskGateway';
import { changeCompletedTask } from './updateTask';
import { renderListItems } from './renderer';
import { setItem } from './storage';

export const onListClick = (event) => {
  const deleteBtn = event.target.classList.contains('list-item__delete-btn');

  if (deleteBtn) {
    const taskId = event.target.dataset.id;

    deleteTask(`${taskId}`)
      .then(() => getTaskList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderListItems();
      });
  }

  changeCompletedTask();
};
