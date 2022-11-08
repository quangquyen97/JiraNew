import {
  GET_ALL_TASK_TYPE,
  GET_ALL_PRIORITY,
  GET_LIST_PROJECT,
  GET_ALL_PROJECT,
} from "./../types/ProjectCyberBugsType";
const stateDefault = {
  projectList: [],
  arrProject: [],
  arrTaskType: [],
  arrPriority: [],
};

export const ProjectCyberBugsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_LIST_PROJECT: {
      state.projectList = action.projectList;

      return { ...state };
    }

    case GET_ALL_PROJECT: {
      state.arrProject = action.arrProject;

      return { ...state };
    }

    case GET_ALL_TASK_TYPE: {
      state.arrTaskType = action.arrTaskType;

      return { ...state };
    }

    case GET_ALL_PRIORITY: {
      state.arrPriority = action.arrPriority;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
