import { Task } from "../Interfaces/task.js";
import { DateUtils } from "../shared/dateUtils.js";
import { UUID } from "../shared/generatedUUID.js";
import { NotificationPlatform } from "../shared/enums.js";

export class Reminder implements Task {
    id: string = UUID();
    dateCreated: Date = DateUtils.today();
    dateUpdated: Date = DateUtils.today();
    description: string = "";

    scheduleDate: Date = DateUtils.tomorrow();
    notifications: Array<NotificationPlatform> = [NotificationPlatform.EMAIL];

    constructor(
        description: string,
        scheduleDate: Date,
        notifications: Array<NotificationPlatform>
    ) {
        this.description = description;
        this.scheduleDate = scheduleDate;
        this.notifications = notifications;
    }

    render(): string {
        return `
       
     Reminder \n
    Description: ${this.description} \n
    Notify by ${this.notifications.join(" and ")} in ${DateUtils.formatDate(
            this.scheduleDate
        )} \n
    Created: ${DateUtils.formatDate(
            this.dateCreated
        )} Last Update: ${DateUtils.formatDate(this.dateUpdated)}
       
        `;
    }
}