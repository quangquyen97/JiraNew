import { taskService } from "../../services/TaskService";
import swal from "sweetalert";

export const createTask = (taskObject) => {
  return async () => {
    try {
      const result = await taskService.createTask(taskObject);
      swal("Bạn đã thêm task thành công!", "", "success");
    } catch (err) {
      swal(`${err.message}`, `${err.content}`, "error");
    }
  };
};

export const updateStatusAction = (action) => {
  return async (dispatch) => {
    try {
      const result = await taskService.updateStatus(action);
      dispatch({ type: "UPDATE_STATUS", arrStatus: result });
    } catch (err) {

    }
  };
};
