import { additionListTasks } from './createTask';
import { onListClick } from './onListClick';

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.btn');
  buttonElem.addEventListener('click', additionListTasks);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
};
