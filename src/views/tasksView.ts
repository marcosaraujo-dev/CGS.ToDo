import { Task } from "../Interfaces/task.js";
import { Todo } from "../Entidades/todo.js";
import { Reminder } from "../Entidades/reminder.js";
import { Mode, NotificationPlatform } from "../shared/enums.js";

export const taskView = {
    getTodo(form: HTMLFormElement): Todo {
        const todoDescription = form.todoDescription.value;
        form.reset();
        return new Todo(todoDescription);
    },
    getReminder(form: HTMLFormElement): Reminder {
        const reminderNotifications = [
            form.notification.value as NotificationPlatform,
        ];
        const reminderDate = new Date(form.scheduleDate.value);
        const reminderDescription = form.reminderDescription.value;
        form.reset();
        return new Reminder(
            reminderDescription,
            reminderDate,
            reminderNotifications
        );
    },
    render(tasks: Array<Task>, mode: Mode) {
        // Clear view
        const tasksList = document.getElementById("tasksList");
        while (tasksList?.firstChild) {
            tasksList.removeChild(tasksList.firstChild);
        }

        // Render Tasks
        tasks.forEach((task) => {
            const li = document.createElement("LI");
            const textNode = document.createTextNode(task.render());
            li.appendChild(textNode);
            tasksList?.appendChild(li);
        });

        // Render form mode
        const todoSet = document.getElementById("todoSet");
        const reminderSet = document.getElementById("reminderSet");
        if (mode === Mode.TODO) {
            todoSet?.setAttribute("style", "display: block;");
            todoSet?.removeAttribute("disabled");
            reminderSet?.setAttribute("style", "display: none;");
            reminderSet?.setAttribute("disabled", "true");
        } else {
            reminderSet?.setAttribute("style", "display: block;");
            reminderSet?.removeAttribute("disabled");
            todoSet?.setAttribute("style", "display: none;");
            todoSet?.setAttribute("disabled", "true");
        }
    },
};