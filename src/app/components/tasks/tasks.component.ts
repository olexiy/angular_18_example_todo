import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input() name?: string;
  @Input() userId?: string;
  
  tasks = [
    { id: 1, userId: "u1", title: "Task 1", summary: "Summary 1", dueDate: "2021-12-31"},
    { id: 2, userId: "u1", title: "Task 2", summary: "Summary 2", dueDate: "2021-12-31"},
    { id: 3, userId: "u2", title: "Task 3", summary: "Summary 3", dueDate: "2021-12-31"},
    { id: 4, userId: "u2", title: "Task 4", summary: "Summary 4", dueDate: "2021-12-31"}
  ];

  get selectedUserTasks() { 
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
