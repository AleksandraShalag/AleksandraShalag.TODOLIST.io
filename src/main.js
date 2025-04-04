import HeaderComponent from './view/header-compomemt.js';
import AddTaskFormComponentComponent from './view/add-task-form-compoment.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';
import {TASK_STATUSES} from './const.js';
import ClearButtonComponent from './view/clear-button-component.js';
import {render, RenderPosition} from './framework/render.js';



const tasksModel = new TasksModel();

// Хедер
const bodyContainer = document.querySelector('.board-app');
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

// Форма добавления задачи
const addTaskContainer = document.querySelector('.add-task');
render(new AddTaskFormComponentComponent(), addTaskContainer);

// Доска задач
const boardTasksContainer = document.querySelector('.board-task');
const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: boardTasksContainer,
  taskModel: tasksModel,
  statuses: Object.values(TASK_STATUSES),
});
tasksBoardPresenter.init();

// Кнопка очистки корзины
const clearButtonContainer = document.querySelector('.task-component-basket');
render(new ClearButtonComponent(), clearButtonContainer);