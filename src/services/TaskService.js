import BaseServices from "./baseService";

export class TaskService extends BaseServices {
  constructor() {
    super();
  }

  createTask = (taskObject) => {
    return this.post("/api/Project/createTask", taskObject);
  };
  updateStatus = (arrStatus) => {
    return this.put("/api/Project/updateStatus", arrStatus);
  };
}

export const taskService = new TaskService();
