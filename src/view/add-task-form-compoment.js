import {createElement} from '../framework/render.js'; 

function createAddTaskFormComponentTemplate() {
    return(
         `<form  name="addTaskForm">
                <div>
                    <h2>Новая задача</h2>
                </div>
                <div>
                    <input type="text" name="addTaskEditText" placeholder="Название задачи..." required>
                    <button type="submit" name="addTaskButton">+ Добавить</button>
                </div>
            </form>`
    );
}


export default class AddTaskFormComponentComponent {
  getTemplate() {
    return createAddTaskFormComponentTemplate();
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

