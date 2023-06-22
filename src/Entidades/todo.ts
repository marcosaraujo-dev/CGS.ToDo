import { Task } from "../Interfaces/task.js";
import { DateUtils } from "../shared/dateUtils.js";
import { UUID } from "../shared/generatedUUID.js";

export class Todo implements Task {
    id: string = UUID();
    dateCreated: Date = DateUtils.today();
    dateUpdated: Date = DateUtils.today();
    description: string = "";

    done: boolean = false;

    constructor(description: string) {
        this.description = description;
    }

    render(): string {
        const doneLabel = this.done ? "Completed" : "In Progress";
        return `
        ToDo
    Description: ${this.description} \n
    Status: ${doneLabel} \n
    Created: ${DateUtils.formatDate(
            this.dateCreated
        )} Last Update: ${DateUtils.formatDate(this.dateUpdated)}
   
        `;
    }
}