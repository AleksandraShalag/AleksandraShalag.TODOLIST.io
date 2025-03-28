import HeaderComponent from './view/header-compomemt.js';
import AddTaskFormComponentComponent from './view/add-task-form-compoment.js';
import BoardTaskComponent from './view/board-task-compoment.js';
import TaskComponent from './view/task-compoment.js';
import TaskListComponent from './view/task-list-compoment.js';
import {render, RenderPosition} from './framework/render.js';




const bodyContainer= document.querySelector('.board-app');
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
const addTaskContainer = document.querySelector('.add-task');
render(new AddTaskFormComponentComponent,addTaskContainer);
const boardTasksContainer = document.querySelector('.board-task');
// добавляем 4 секции
for (let i = 0; i < 4; i++) {
  render(new BoardTaskComponent(), boardTasksContainer);
}
//находим ВСЕ секции и добавляем в них по компоненту (название компонента + пустой список)
const taskSectionsContainers = document.querySelectorAll('.task-section');
taskSectionsContainers.forEach((section) => {
  render(new TaskComponent(), section); 
});
const taskCompomentContainers = document.querySelectorAll('.tasks-list');
taskCompomentContainers.forEach((component)=>{
    //добавляем по 3 пункта в каждый пустой список
    for (let i = 0; i < 3; i++) {
        render(new TaskListComponent(),component);
    }
});