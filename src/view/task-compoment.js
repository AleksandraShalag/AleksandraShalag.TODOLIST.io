import {createElement} from '../framework/render.js'; 


function createTaskComponentTemplate() {
    return (
        `<div>
            <h3>Название блока</h3>
                <ul class="tasks-list"> 
                        
                </ul>
        </div>`
      );
}


export default class TaskComponent {
  getTemplate() {
    return createTaskComponentTemplate();
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
