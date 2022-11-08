const initialState = {
  taskDetailModal: {},
};

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASK_DETAIL": {
      state.taskDetailModal = action.taskDetailModal;
      return { ...state };
    }

    default:
      return state;
  }
};
