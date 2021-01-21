
const initUrl = 'https://5ffdb7fbd9ddad0017f68719.mockapi.io/api/v1/tasklist';

export const createTask = taskData =>
    fetch(initUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(taskData),
    });

export const updateTask = (taskId, taskData) =>
    fetch(`${initUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(taskData),
    });

export const deleteTask = taskId =>
    fetch(`${initUrl}/${taskId}`, {
      method: 'DELETE',
    });

const mapTasks = tasks => tasks
  .map(({_id, ...rest}) => ({id: _id, ...rest}));

export const getTaskList = () =>
    fetch(initUrl)
      .then(response => response.json())
      .then(mapTasks);