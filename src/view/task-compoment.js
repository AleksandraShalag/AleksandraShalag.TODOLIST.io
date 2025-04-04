import {createElement} from '../framework/render.js'; 


function createTaskComponentTemplate({status, tasks}) {
  return `
    <div class="task-component-${status.class}">
      <h3 name="${status.class}">${status.title}</h3>
      <ul class="tasks-list">
        ${tasks.map(task => `<li class="task-list-item-${status.class}">${task.title}</li>`).join('')}
      </ul>
    </div>
  `;
}
export default class TaskComponent {

  constructor({status, tasks}) {
    this.status = status;
    this.tasks = tasks;
  }

  getTemplate() {
    return createTaskComponentTemplate({
      status: this.status,
      tasks: this.tasks,
    });
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