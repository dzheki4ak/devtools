import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from './storage.js';

const taskListSorte = (a, b) => {
  if (!a.done) {
    return new Date(b.createDate) - new Date(a.createDate);
  }

  if (a.done && b.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }

  ;
};

const createCheckbox = (_ref) => {
  let {
    done,
    id
  } = _ref;
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.id = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};

const createListItem = (_ref2) => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  const checkboxElem = createCheckbox({
    done,
    id
  });

  if (done) {
    listItemElem.classList.add('list-item__done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.dataset.id = id;
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

export const renderListItems = () => {
  const listElem = document.querySelector('.list');
  const taskList = getItem('tasksList') || [];
  const listItemsElems = taskList.sort(taskListSorte).map(createListItem);
  listElem.innerHTML = '';
  listElem.append(...listItemsElems);
};