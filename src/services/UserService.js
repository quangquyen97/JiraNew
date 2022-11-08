import BaseServices from "./baseService";

export class UserService extends BaseServices {
  constructor() {
    super();
  }

  getUser = (keyWord) => {
    return this.get(`/api/Users/getUser?keyword=${keyWord}`);
  };

  getUserByProjectId = (projectId) => {
    return this.get(`/api/Users/getUserByProjectId?idProject=${projectId}`);
  };

  assignUserProject = ({ projectId, userId }) => {
    return this.post(`/api/Project/assignUserProject`, { projectId, userId });
  };

  deleteUserFromProject = ({ projectId, userId }) => {
    return this.post(`/api/Project/removeUserFromProject`, {
      projectId,
      userId,
    });
  };

  login = (userInfo) => {
    return this.post("/api/Users/signin", userInfo);
  };

  register = (regisInfo) => {
    return this.post("/api/Users/signup", regisInfo);
  };
}

export const userService = new UserService();
