
import { TaskController } from './controller/taskController.js';
import { taskView } from './views/tasksView.js';
(() => {
    TaskController(taskView);
})();
