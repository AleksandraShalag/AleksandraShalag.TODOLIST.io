import {tasks} from "../mock/task.js"

export default class TasksModel{
    #boardtasks = tasks;

    getTasks(){
        return this.#boardtasks;
    }
    
    getTasksByStatus(status) {
        console.log(this.#boardtasks)
        return this.#boardtasks.filter((task) => task.status === status);
    }

}