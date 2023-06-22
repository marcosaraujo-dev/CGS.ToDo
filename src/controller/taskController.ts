import { Task } from "../Interfaces/task.js";
import { Mode } from "../shared/enums.js";
import { taskView } from "../views/tasksView.js";

export const TaskController = (view: typeof taskView) => {
    const tasks: Array<Task> = [];
    let mode: Mode = Mode.TODO;

    const handleTaskCreate = (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        switch (mode as Mode) {
            case Mode.TODO:
                tasks.push(view.getTodo(form));
                break;
            case Mode.REMINDER:
                tasks.push(view.getReminder(form));
                break;
        }
        view.render(tasks, mode);
    };

    const handleModeToggle = () => {
        switch (mode as Mode) {
            case Mode.TODO:
                mode = Mode.REMINDER;
                break;
            case Mode.REMINDER:
                mode = Mode.TODO;
                break;
        }
        view.render(tasks, mode);
    };

    document
        .getElementById("toggleMode")
        ?.addEventListener("click", handleModeToggle);
    document
        .getElementById("taskForm")
        ?.addEventListener("submit", handleTaskCreate);
};