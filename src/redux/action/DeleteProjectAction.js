import { cyberbugsService } from "../../services/CyberbugsService";
import { notifiFunction } from "../../ulti/Notification/NotificationCyberbugs";
import { getAllProjectAction } from "./ProjectCyberBugsAction";

export const DeleteProjectAction = (action) => {
  return async (dispatch) => {
    try {
      const result = await cyberbugsService.deleteProject(action.projectId);
      dispatch(getAllProjectAction());
      notifiFunction("success", "Xóa project thành công!", "");
    } catch (err) {
      notifiFunction("error", "Xóa project thất bại!", "");
    }
  };
};
