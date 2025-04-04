import TaskComponent from '../view/task-compoment.js';
import BoardTaskComponent from '../view/board-task-compoment.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import {render} from '../framework/render.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #taskModel=null;
  #statuses=null;

  constructor({boardContainer, taskModel, statuses}) {
    this.#boardContainer = boardContainer;
    this.#taskModel = taskModel;
    this.#statuses = statuses;
  }

  init() {
    this.#statuses.forEach((status) => {
        const tasks = this.#taskModel.getTasksByStatus(status.class);
        console.log(status.class)
        
        const boardTaskComponent = new BoardTaskComponent();
        
        const taskComponent = new TaskComponent({
          status: status, 
          tasks: tasks,
        });
  
        render(boardTaskComponent, this.#boardContainer);
        
        render(taskComponent, boardTaskComponent.getElement());

      });
  }
}