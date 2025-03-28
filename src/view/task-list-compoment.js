import {createElement} from '../framework/render.js'; 


function createTaskListComponentTemplate() {
    return (
        `<li>Название первой задачи</li>`
      );
}


export default class TaskListComponent {
  getTemplate() {
    return createTaskListComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
