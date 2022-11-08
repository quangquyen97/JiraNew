import { history } from "../../App";
import { cyberbugsService } from "../../services/CyberbugsService";
import { projectService } from "../../services/ProjectService";
import { PUT_PROJECT_DETAIL } from "../../ulti/constants/Cyberbugs/Cyberbugs";
import { notifiFunction } from "../../ulti/Notification/NotificationCyberbugs";
import {
  GET_ALL_PROJECT,
  GET_ALL_TASK_TYPE,
  GET_ALL_PRIORITY,
} from "./../types/ProjectCyberBugsType";

export const getAllProjectAction = () => {
  return async (dispatch) => {
    try {
      const result = await cyberbugsService.getAllProject();
      dispatch({
        type: "GET_LIST_PROJECT",
        projectList: result,
      });
    } catch (err) {
      
    }
  };
};

export const getListProjectAction = () => {
  return async (dispatch) => {
    try {
      const result = await cyberbugsService.getListProject();
      dispatch({
        type: GET_ALL_PROJECT,
        arrProject: result,
      });
    } catch (err) {
      
    }
  };
};

export const getAllTaskType = () => {
  return async (dispatch) => {
    try {
      const result = await cyberbugsService.getAllTaskType();
      dispatch({
        type: GET_ALL_TASK_TYPE,
        arrTaskType: result,
      });
    } catch (err) {
      
    }
  };
};

export const getAllPriority = () => {
  return async (dispatch) => {
    try {
      const result = await cyberbugsService.getAllPriority();
      dispatch({
        type: GET_ALL_PRIORITY,
        arrPriority: result,
      });

    } catch (err) {
      
    }
  };
};

export const createProjectAction = (newProject) => {
  return async (dispatch) => {
    try {
      const result = await cyberbugsService.createProjectAuthorization(
        newProject
      );
      notifiFunction("success", "Thêm project thành công!", "");
      history.push("/projectmanagement");

    } catch (err) {
        notifiFunction("error", "Thêm project thất bại!", "");
    }
  };
};

export const updateProjectAction = (updateProject) => {
  return async (dispatch) => {
    try {
      const result = await cyberbugsService.updateProject(updateProject);
      notifiFunction("success", "Cập nhật project thành công!", "");
      dispatch(getAllProjectAction());
      dispatch({ type: "CLOSE_DRAWER" });

    } catch (err) {
        notifiFunction("error", "Cập nhật project thất bại!", "");
    }
  };
};

export const getProjectDetailAction = (projectId) => {
  return async (dispatch) => {
    try {
      const result = await projectService.getProjectDetail(projectId);
      dispatch({
        type: PUT_PROJECT_DETAIL,
        projectDetail: result,
      });

    } catch (err) {
      history.push("/projectmagagement");
    }
  };
};
