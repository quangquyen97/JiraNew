import axios from "axios";
import { DOMAIN_CYBERBUG, TOKEN } from "../ulti/constants/settingSystem";
import BaseServices from "./baseService";

class CyberbugsService extends BaseServices {
  constructor() {
    super();
  }

  getAllProjectCategory = () => {
    return this.get("/api/ProjectCategory");
  };

  getListProject = () => {
    return this.get("/api/Project/getAllProject");
  };

  getAllProject = () => {
    return this.get("/api/Project/getAllProject");
  };

  getAllTaskType = () => {
    return this.get("/api/TaskType/getAll");
  };

  getAllPriority = () => {
    return this.get("/api/Priority/getAll");
  };

  createProject = (newProject) => {
    return this.post(`/api/Project/createProject`, newProject);
  };

  createProjectAuthorization = (newProject) => {
    return this.post(`/api/Project/createProjectAuthorize`, newProject);
  };

  updateProject = (projectUpdate) => {
    return this.put(
      `/api/Project/updateProject?projectId=${projectUpdate.id}`,
      projectUpdate
    );
  };

  deleteProject = (projectId) => {
    return this.delete(`/api/Project/deleteProject?projectId=${projectId}`);
  };
}

export const cyberbugsService = new CyberbugsService();
